---
title: JavaSE 面向对象
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

## java面向对象

### 一、面向对象都有哪些特征以及你对这些特征的理解？

首先是**继承**：继承是已有类得到继承信息创建新的类的过程。提供继承信息的类是父类，继承信息的类是子类。继承让软件系统有了一定的延续性，同时继承也是封装程序中可变因素的重要手段！

第二是**封装**：通常我把封装定义为将数据和操作数据的方法绑定起来，对数据的访问只提供已定义的接口。可以说封装就是隐藏一切可以隐藏的东西，只向外界提供最简单的编程接口！

第三是**多态**：多态是指允许不同子类型的对象对统一消息做出不同响应，简单说就是用同样的对象调用同样的方法但是做了不同的事情。多态又可以分为编译时的多态性和运行时的多态性，方法重载（overload）实现的是编译时的多态性（也称为前绑定），而方法重写 （override）实现的是运行时的多态性（也称为后绑定）。运行时的多态是面向对象最精髓的东西，要实现多态需要做 两件事：1. 方法重写（子类继承父类并重写父类中已有的或抽象的方法）；2. 对象造型（用父类型引用引用子类型对 象，这样同样的引用调用同样的方法就会根据子类对象的不同而表现出不同的行为，比如猫、狗和动物的例子）。

第四是**抽象**：抽象是将一类对象的共同特征总结出来构造类的过程，包括数据抽象和行为抽象两方面。抽象只关注对 象有哪些属性和行为，并不关注这些行为的细节是什么（想象一下抽象类）。

### 二、访问权限修饰符：

<img src="https://edu-exer.oss-cn-hangzhou.aliyuncs.com/2021/05/18/%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E4%BF%AE%E9%A5%B0%E7%AC%A6" />

### 三、如何理解clone对象

```java
1. Person p = new Person(23, "kjuns");
2. Person p1 = p;
3. System.out.println(p);
4. System.out.println(p1);
//运行结果
1．com.itheima.Person@2f9ee1ac
2．com.itheima.Person@2f9ee1ac
```

打印的地址值是相同的，既然地址都是相同的，那么肯定是同一个对象。p 和 p1 只是引用而已，他们 都指向了一个相同的对象 Person(23, “kjuns”)。

```java
1．Person p = new Person(23, "kjuns");
2．Person p1 = (Person) p.clone();
3．System.out.println(p);
4．System.out.println(p1);
```

这是克隆，地址值可想而知是不同的。

其次，clone 方法执行的是浅拷贝。

<img src="https://edu-exer.oss-cn-hangzhou.aliyuncs.com/2021/05/18/clone%E6%B7%B1%E6%B5%85%E6%8B%B7%E8%B4%9D" />

