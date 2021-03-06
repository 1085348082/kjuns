---
title: JavaSE 多线程
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

## Java 多线程

### 一、多线程的创建方式

**1.继承 Thread 类：**但 Thread 本质上也是实现了 Runnable 接口的一个实例，它代表一个线程的实例，并 且，启动线程的唯一方法就是通过 Thread 类的 start()实例方法。start()方法是一个 native 方法，它将启动一个新线 程，并执行 run()方法。这种方式实现多线程很简单，通过自己的类直接 extend Thread，并复写 run()方法，就可以 启动新线程并执行自己定义的 run()方法。

**2.实现 Runnable 接口**的方式实现多线程，并且实例化 Thread，传入自己的 Thread 实例，调用 run( )方法。

**继承Thread和实现Runnable接口的区别**：

- 实现Runnable接口避免多继承局限
- 实现Runnable()可以更好的体现共享的概念

**3.覆写Callable接口实现多线程（JDK1.5）：**

核心方法叫call()方法，有返回值

**4.通过线程池启动多线程：**

线程池是事先将多个线程对象放到一个容器中，当使用的时候就不用 new 线程而是直接去池中拿线程即可，节 省了开辟子线程的时间，提高的代码执行效率。

**通过Executor 的工具类可以创建多种类型的普通线程池：**

FixThreadPool(int n); 固定大小的线程池：使用于为了满足资源管理需求而需要限制当前线程数量的场合。使用于负载比较重的服务器。

SingleThreadPoolExecutor ：单线程池，需要保证顺序执行各个任务的场景

CashedThreadPool(); 缓存线程池：当提交任务速度高于线程池中任务处理速度时，缓存线程池会不断的创建线程适用于提交短期的异步小程序，以及负载较轻的服务器

ScheduledThreadPool：大小无限的线程池，此线程池支持定时以及周期性执行任务的需求。

![img](https://img-blog.csdn.net/20180802230855612?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTg5MTg1NA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 二、在 java 中 wait 和 sleep 方法的不同？ 

最大的不同是在等待时 wait 会释放锁，而 sleep 一直持有锁。wait 通常被用于线程间交互，sleep 通常被用于暂停执行。

### 三、synchronized 和 volatile 关键字的作用

一旦一个共享变量（类的成员变量、类的静态成员变量）被 **volatile** 修饰之后，那么就具备了两层语义：

- 保证了不同线程对这个变量进行操作时的可见性，即一个线程修改了某个变量的值，这新值对其他线程来说是立即可见的。

- 禁止进行指令重排序。

  ----------------------------------------------------------------

  volatile 本质是在告诉 jvm 当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取；synchronized 则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。

  volatile 仅能使用在变量级别；synchronized 则可以使用在变量、方法、和类级别的。

  volatile 仅能实现变量的修改可见性，并不能保证原子性； synchronized 则可以保证变量的修改可见性和原子性。

  volatile 不会造成线程的阻塞；synchronized 可能会造成线程的阻塞。

  volatile 标记的变量不会被编译器优化； synchronized 标记的变量可以被编译器优化。

### 四、请叙述一下您对线程池的理解？

（如果问到了这样的问题，可以展开的说一下线程池如何用、线程池的好处、线程池的启动策略）

合理利用线程池能够带来**三个好处：**

第一：**降低资源消耗。**通过重复利用已创建的线程降低线程创建和销毁造成的消耗。

第二：**提高响应速度。**当任务到达时，任务可以不需要等到线程创建就能立即执行。

第三：**提高线程的可管理性。**线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。

**线程池的启动策略：**

1.线程池刚创建时，里面没有一个线程。

2.当调用 execute() 方法添加一个任务时，线程池会做如下判断：

- 如果正在运行的线程数量小于 corePoolSize，那么马上创建线程运行这个任务；
- 如果正在运行的线程数量大于或等于 corePoolSize，那么将这个任务放入队列。
- 如果这时候队列满了，而且正在运行的线程数量小于 maximumPoolSize，那么还是要创建线程运行这个任务；
- 如果队列满了，而且正在运行的线程数量大于或等于 maximumPoolSize，那么线程池会抛出异常，告诉调用者“我不能再接受任务了”。

3.当一个线程完成任务时，它会从队列中取下一个任务来执行。

4.当一个线程无事可做，超过一定的时间（keepAliveTime）时，线程池会判断，如果当前运行的线程数大于 corePoolSize，那么这个线程就被停掉。所以线程池的所有任务完成后，它最终会收缩到 corePoolSize 的大小。

### 五、如何控制某个方法允许并发访问线程的个数？

 `new Semaphore(5,true);`

使用纯 Java API 的 Semaphore 类还可以控制线程的等待和释放。

### 六、同一个类中的 2 个方法都加了同步锁，多个线程能同时访问同一个类中的这两个方法吗？

这个问题需要考虑到Lock与synchronized 两种实现锁的不同情形。因为这种情况下使用Lock 和synchronized  会有截然不同的结果。Lock 可以让等待锁的线程响应中断，Lock 获取锁，之后需要释放锁。**多个线程不可 访问同一个类中的 2 个加了 Lock 锁的方法。**而 synchronized 却不行，使用 synchronized 时，当我们访问同一个类对象的时候，**是同一把锁，所以可以访问该对象的其他 synchronized 方法。**

### 七、什么情况下导致线程死锁，遇到线程死锁该怎么解决？

**死锁的定义：**所谓死锁是指多个线程因竞争资源而造成的一种僵局（互相等待），若无外力作用，这些进 程都将无法向前推进。

**死锁产生的必要条件：**

- 互斥条件：线程要求对所分配的资源（如打印机）进行排他性控制，即在一段时间内某资源仅为一个线程所占有。此时若有其他线程请求该资源，则请求线程只能等待。
- 不剥夺条件：线程所获得的资源在未使用完毕之前，不能被其他线程强行夺走，即只能由获得该资源的线程 自己来释放（只能是主动释放)。
- 请求和保持条件：线程已经保持了至少一个资源，但又提出了新的资源请求，而该资源已被其他线程占有， 此时请求进程被阻塞，但对自己已获得的资源保持不放。
- 循环等待条件：存在一种线程资源的循环等待链，链中每一个线程已获得的资源同时被链中下一个线程所请 求。即存在一个处于等待状态的线程集合{Pl, P2, ..., pn}，其中 Pi 等待的资源被 P(i+1)占有（i=0, 1, ..., n-1)， Pn 等待的资源被 P0 占有，形成了死循环。

**如何避免死锁：**

加锁顺序（线程按照一定的顺序加锁）

加锁时限（线程尝试获取锁的时候加上一定的时限，超过时限则放弃对该锁的请求，并释放自己占有的锁）

### 八、Java 中多线程间的通信怎么实现?

**共享变量：**线程间通信可以通过发送信号，发送信号的一个简单方式是在共享对象的变量里设置信号值。

**wait/notify 机制：**以资源为例，生产者生产一个资源，通知消费者就消费掉一个资源，生产者继续生产资源，消费者消费资源，以此循环。

### 九、线程和进程的区别

**进程：**具有一定独立功能的程序关于某个数据集合上的一次运行活动，**是操作系统进行资源分配和调度的一个独立单位。**

**线程：**是**进程的一个实体**，是 cpu 调度和分派的基本单位，**是比进程更小的可以独立运行的基本单位。**

**特点：**线程的划分尺度小于进程，这使多线程程序拥有高并发性，进程在运行时各自内存单元相互独立，线程之间内存共享，这使多线程编程可以拥有更好的性能和用户体验

**注意：**多线程编程对于其它程序是不友好的，占据大量 cpu 资源。

### 十、同步线程及线程调度相关的方法？

**wait()：**使一个线程处于等待（阻塞）状态，并且释放所持有的对象的锁；

**sleep()：**使一个正在运行的线程处于睡眠状态，是一个静态方法，调用此方法要处理 InterruptedException 异常；

**notify()：**唤醒一个处于等待状态的线程，当然在调用此方法的时候，并不能确切的唤醒某一个等待状态的线程，而是由 JVM 确定唤醒哪个线程，而且与优先级无关；

**notityAll()：**唤醒所有处于等待状态的线程，该方法并不是将对象的锁给所有线程，而是让它们竞争，只有获得锁 的线程才能进入就绪状态；

**注意：**java 5 通过 Lock 接口提供了显示的锁机制，Lock 接口中定义了加锁（lock（）方法）和解锁（unLock（） 方法），增强了多线程编程的灵活性及对线程的协调。

### 十一、启动一个线程是调用 run()方法还是 start()方法？

启动一个线程是调用 start()方法，使线程所代表的虚拟处理机处于可运行状态，这意味着它可以由 JVM 调度并 执行，这并不意味着线程就会立即运行。 

run()方法是线程启动后要进行回调（callback）的方法。



## 内部类：

### 十二、静态嵌套类 (Static Nested Class) 和内部类(Inner Class)的不同？

**静态嵌套类：**Static Nested Class 是被声明为静态（static）的内部类，它可以不依赖于外部类实例被实例化。

**内部类：**需要在外部类实例化后才能实例化，其语法看起来挺诡异的。
