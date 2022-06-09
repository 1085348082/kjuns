---
title: JavaSE 异常处理
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

## java的异常处理

### 一、Java 中异常分为哪些种类？

为编译时异常（也叫强制性异常）也叫 CheckedException 和运行时异常 （也叫非强制性异常）也叫 RuntimeException。

### 二、error 和 exception 的区别？

Error 类和 Exception 类的父类都是 Throwable 类。

Error 类一般是指与虚拟机相关的问题，如系统崩溃，虚拟机错误，内存空间不足，方法调用栈溢出等。

Exception 类表示程序可以处理的异常，可以捕获且可能恢复。

### 三、java 异常处理机制

所有异常的根类为 java.lang.Throwable， Throwable 下面又派生了两个子类：Error 和 Exception，Error 表示应用程序本身无法克服和恢复的一种严重问题，Exception 表示程序还能够克服和恢复的问题。Exception中又分为系统异常和普通异常，系统异常：数组脚本越界、空指针异常、类转换异常。。普通异常：网络断线、硬盘空间不够，运行环境的变化或异常所导致的问题。

### 四、你最常见的 5 个 RuntimeException

1. NullPointerException 空指针异常
2. ClassNotFoundException 指定的类找不到
3. IndexOutOfBoundsException 数组角标越界异常
4. ClassCastException 数据类型转换异常
5. SQLException SQL 异常

### 五、throw 和 throws 的区别

**throw：**

- throw 语句用在方法体内，表示抛出异常，由方法体内的语句处理。
- throw 是具体向外抛出异常的动作

**throws：**

- throws 语句是用在方法声明后面，表示如果抛出异常，由该方法的调用者来进行异常的处理。
- throws 主要是声明这个方法会抛出某种类型的异常，让它的使用者要知道需要捕获的异常的类型。
- throws 表示出现异常的一种可能性，并不一定会发生这种异常。

### 六、final、finally、finalize 的区别？

**final：**用于声明属性，方法和类，分别表示属性不可变，方法不可覆盖，被其修饰的类不可继承。

**finally：**异常处理语句结构的一部分，表示总是执行。

**finalize：Object 类的一个方法，在垃圾回收器执行的时候会调用被回收对象的此方法，**可以覆盖此方法 提供垃圾收集时的其他资源回收，例如关闭文件等。**该方法更像是一个对象生命周期的临终方法**，当该方法 被系统调用则代表该对象即将“死亡”，但是需要注意的是，我们主动行为上去调用该方法并不会导致该对 象“死亡”，**这是一个被动的方法**（其实就是回调方法），不需要我们调用。
