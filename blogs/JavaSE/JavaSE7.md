---
title: JavaSE 反射
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

## Java 反射

### 一、说说你对 Java 中反射的理解

Java 中 的 反 射 首 先 是 能 够 获 取 到 Java 中 要 反 射 类 的 字 节 码 

获 取 字 节 码 有 三 种 方 法 ： 

1.Class.forName(className)   

2.类名.class 

3.this.getClass()。

然后将字节码中的方法，变量，构造函数等映射成 相应的 Method、Filed、Constructor 等类，这些类提供了丰富的方法可以被我们所使用。

反射可以去执行私有方法，并且获取私有变量。

### 二、Java 中的动态代理

**写一个 ArrayList 的动态代理类（笔试题）：**

```java
final List<String> list = new ArrayList<String>();

List<String> proxyInstance = (List<String>)Proxy.newProxyInstance(
    list.getClass().getClassLoader(),
    list.getClass().getInterfaces(),
    new InvocationHandler() {
	@Override
	public Object invoke(Object proxy,
                         Method method,
                         Object[] args) throws Throwable{
		return method.invoke(list, args);
	}
});
proxyInstance.add("你好");
System.out.println(list);
```

### 三、动静态代理的区别，什么场景使用？

静态代理通常只代理一个类，动态代理是代理一个接口下的多个实现类。

静态代理事先知道要代理的是什么，而动态代理不知道要代理什么东西，只有在运行时才知道。

动态代理是实现 JDK 里的 InvocationHandler 接口的 invoke 方法，但注意的是代理的是接口，也就是你的业务类必须要实现接口，通过 Proxy 里的 newProxyInstance 得到代理对象。

还有一种动态代理 CGLIB，代理的是类，不需要业务类继承接口，通过派生的子类来实现代理。通过在运行时，动态修改字节码达到修改类的目的。 AOP 编程就是基于动态代理实现的，比如著名的 Spring 框架、Hibernate 框架等等都是动态代理的使用例子。

[Java面试必知必会.Java基础.05.动态代理(JDK/CGLIB)_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://www.bilibili.com/video/BV1cz41187Dk)

