---
title: JavaSE jvm
date: 2021-05-22
sidebar: 'auto'
tags:
 - JavaSE
 - 面试题
categories: 
 - 学
publish: true
---

# JavaSE基础

## Java jvm

### 一、JVM 垃圾回收机制常见算法

**搜索算法：**

1. 引用计数器算法（废弃）
2. 根搜索算法（使用）

根搜索算法是通过一些“GC Roots”对象作为起点，从这些节点开始往下搜索，搜索通过的路径成为引用链 （Reference Chain），当一个对象没有被 GC Roots 的引用链连接的时候，说明这个对象是不可用的。

**回收算法：**

标记—清除算法：

标记—清除算法包括两个阶段：“标记”和“清除”。在标记阶段，确定所有要回收的对象，并做标记。清除阶段 紧随标记阶段，将标记阶段确定不可用的对象清除。标记—清除算法是基础的收集算法，标记和清除阶段的效率不高， 而且清除后回产生大量的不连续空间，这样当程序需要分配大内存对象时，可能无法找到足够的连续空间。

复制算法：

复制算法是把内存分成大小相等的两块，每次使用其中一块，当垃圾回收的时候，把存活的对象复制到另一块上， 然后把这块内存整个清理掉。复制算法实现简单，运行效率高，但是由于每次只能使用其中的一半，造成内存的利用率 不高。现在的 JVM 用复制方法收集新生代，由于新生代中大部分对象（98%）都是朝生夕死的，所以两块内存的比例 不是 1:1(大概是 8:1)。

标记—整理算法：

标记—整理算法和标记—清除算法一样，但是标记—整理算法不是把存活对象复制到另一块内存，而是把存活对 象往内存的一端移动，然后直接回收边界以外的内存。标记—整理算法提高了内存的利用率，并且它适合在收集对象 存活时间较长的老年代。

分代收集：

分代收集是根据对象的存活时间把内存分为新生代和老年代，根据各个代对象的存活特点，每个代采用不同的垃圾回收算法。新生代采用复制算法，老年代采用标记—整理算法。垃圾算法的实现涉及大量的程序细节，而且不同的 虚拟机平台实现的方法也各不相同。

### 二、谈谈 JVM 的内存结构和内存分配

**Java 内存模型：**

Java 虚拟机将其管辖的内存大致分三个逻辑部分：方法区(Method Area)、Java 栈和 Java 堆。 

1、方法区是静态分配的，编译器将变量绑定在某个存储位置上，而且这些绑定不会在运行时改变。 常数池，源代码中的命名常量、String 常量和 static 变量保存在方法区。 

2、Java Stack 是一个逻辑概念，特点是后进先出。一个栈的空间可能是连续的，也可能是不连续的。 最典型的 Stack 应用是方法的调用，Java 虚拟机每调用一次方法就创建一个方法帧（frame），退出该 方法则对应的 方法帧被弹出(pop)。栈中存储的数据也是运行时确定的。 

3、Java 堆分配(heap allocation)意味着以随意的顺序，在运行时进行存储空间分配和收回的内存管理模型。 堆中存储的数据常常是大小、数量和生命期在编译时无法确定的。Java 对象的内存总是在 heap 中分配。 我们每天都在写代码，每天都在使用 JVM 的内存。

 **java 内存分配：**

1、基础数据类型直接在栈空间分配

2、方法的形式参数，直接在栈空间分配，当方法调用完成后从栈空间回收

3、引用数据类型，需要用 new 来创建，既在栈空间分配一个地址空间，又在堆空间分配对象的类变量

4、方法的引用参数，在栈空间分配一个地址空间，并指向堆空间的对象区，当方法调用完后从栈空间回收

5、局部变量 new 出来时，在栈空间和堆空间中分配空间，当局部变量生命周期结束后，栈空间立刻被回收，堆空间区域等待 GC 回收

6、方法调用时传入的实际参数，先在栈空间分配，在方法调用完成后从栈空间释放

7、字符串常量在 DATA 区域分配 ，this 在堆空间分配

8、数组既在栈空间分配数组名称， 又在堆空间分配数组实际的大小！

### 三、Java 中引用类型都有哪些？

**强引用：**这个就不多说，**我们写代码天天在用的就是强引用。**如果一个对象被被人拥有强引用，那么垃圾回收器绝不 会回收它。当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError 错误，使程序异常终止，也不会靠随意 回收具有强引用的对象来解决内存不足问题。

**软引用：**如果一个对象只具有软引用，那么如果内存空间足够，垃圾回收器就不会回收它，如果内存空间不足了，就会 回收这些对象的内存。只要垃圾回收器没有回收它，该对象就可以被程序使用。**软引用可用来实现内存敏感的高速缓存。**

**弱引用：**如果一个对象只具有弱引用，那该类就是可有可无的对象，因为只要该对象被 gc 扫描到了随时都会把它干 掉。**弱引用与软引用的区别在于：**只具有弱引用的对象拥有更短暂的生命周期。在垃圾回收器线程扫描它所管辖 的内存区域的过程中，一旦发现了只具有弱引用的对象，不管当前内存空间足够与否，都会回收它的内存。不过， 由于垃圾回收器是一个优先级很低的线程， 因此不一定会很快发现那些只具有弱引用的对象。

**虚引用：**"虚引用"顾名思义，就是形同虚设，与其他几种引用都不同，虚引用并不会决定对象的生命周期。如果一个对 象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收。**虚引用主要用来跟踪对象被垃圾回收的活动。**

### 四、Java 的类加载器的种类都有哪些？

根类加载器(Bootstrap) --C++写的 ，看不到源码

扩展类加载器（Extension） --加载位置 ：jre\lib\ext 中

系统(应用)类加载器(System\App) --加载位置 ：classpath 中

自定义加载器(必须继承 ClassLoader)

### 五、类什么时候被初始化？

1）创建类的实例，也就是 new 一个对象 

2）访问某个类或接口的静态变量，或者对该静态变量赋值 

3）调用类的静态方法 

4）反射（Class.forName("com.lyj.load")）

5）初始化一个类的子类（会首先初始化子类的父类） 

6）JVM 启动时标明的启动类，即文件名和类名相同的那个类

### 六、Java 类加载体系之 ClassLoader 双亲委托机制

java 是一种类型安全的语言，它有四类称为安全沙箱机制的安全机制来保证语言的安全性，这四类安全 沙箱分别是：

1） 类加载体系 

2） .class 文件检验器

3） 内置于 Java 虚拟机（及语言）的安全特性 

4） 安全管理器及 Java API

java 程序中的 .java 文件编译完会生成 .class 文件，而 .class 文件就是通过被称为类加载器的 ClassLoader 加载的，而 ClassLoder 在加载过程中会使用“双亲委派机制”来加载 .class 文件。

**1）当 AppClassLoader 加载一个 class 时，它首先不会自己去尝试加载这个类，而是把类加载请求委派给父 类加载器 ExtClassLoader 去完成。** 

**2）当 ExtClassLoader 加载一个 class 时，它首先也不会自己去尝试加载这个类，而是把类加载请求委派给 BootStrapClassLoader 去完成。** 

**3）如果 BootStrapClassLoader 加载失败（例如在 JAVA_HOME/jre/lib 里未查找到该 class），会使用 ExtClassLoader 来尝试加载；** 

**4）若 ExtClassLoader 也加载失败，则会使用 AppClassLoader 来加载，如果 AppClassLoader 也加载失败， 则会报出异常 ClassNotFoundException。**

### 六、获得一个类对象有哪些方式？

类型.class，例如：String.class 

对象.getClass()，例如：”hello”.getClass() 

Class.forName()，例如：Class.forName(“java.lang.String”)

### 七、GC 基础知识

**为什么会有 GC 机制：**安全性考虑；减少内存泄露；减少程序员工作量。

**GC 哪些内存需要回收：**GC 主要进行回收的内存是 JVM 中的方法区和堆；

**GC 什么时候回收垃圾：**对象添加引用计数器（不太好）、可达性分析

对于堆中的对象，主要用可达性分析判断一个对象是否还存在引用，如果该对象没有任何引用就应该被回收。

对于方法区中的常量和类，当一个常量没有任何对象引用它，它就可以被回收了。而对于类，如果可以判定它为无 用类，就可以被回收了。

### 八、在开发中遇到过内存溢出么？原因有哪些？解决方法有哪些？

引起内存溢出的原因有很多种，**常见的有以下几种：** 

1.内存中加载的数据量过于庞大，如一次从数据库取出过多数据； 

2.集合类中有对对象的引用，使用完后未清空，使得 JVM 不能回收； 

3.代码中存在死循环或循环产生过多重复的对象实体； 

4.使用的第三方软件中的 BUG； 

5.启动参数内存值设定的过小； 

**内存溢出的解决方案：** 

第一步，修改 JVM 启动参数，直接增加内存。(-Xms，-Xmx 参数一定不要忘记加。)

第二步，检查错误日志，查看“OutOfMemory”错误前是否有其它异常或错误。

第三步，对代码进行走查和分析，找出可能发生内存溢出的位置。

​	重点排查以下几点：

​	1.检查对数据库查询中，是否有一次获得全部数据的查询。一般来说，如果一次取十万条记录到内存，就可能 引起内存溢出。这个问题比较隐蔽，在上线前，数据库中数据较少，不容易出问题，上线后，数据库中数据多了，一次 查询就有可能引起内存溢出。因此对于数据库查询尽量采用分页的方式查询。 

​	2.检查代码中是否有死循环或递归调用。 

​	3.检查是否有大循环重复产生新对象实体。 

​	4.检查对数据库查询中，是否有一次获得全部数据的查询。一般来说，如果一次取十万条记录到内存，就可能 引起内存溢出。这个问题比较隐蔽，在上线前，数据库中 数据较少，不容易出问题，上线后，数据库中数据多了， 一次查询就有可能引起内存溢出。因此对于数据库查询尽量采用分页的方式查询。 

​	5.检查 List、MAP 等集合对象是否有使用完后，未清除的问题。List、MAP 等集合对象会始终存有对对象的 引用，使得这些对象不能被 GC 回收。 

第四步，使用内存查看工具动态查看内存使用情况。

