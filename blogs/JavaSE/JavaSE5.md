---
title: JavaSE 常用api和数据类型
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

## Java 常用api和数据类型

### 一、JavaSE 常用 API

- Math.round(11.5)的返回值是 12，Math.round(-11.5)的返回值是-11。四舍五入的原理是在参数上加 0.5 然后进行取整。
- 数组没有 length()方法，而是有 length 的属性。String 有 length()方法。
- 在 Java 中 无论使用何种方式进行字符串连接，实际上都使用的是 StringBuilder

### 二、Java 中的日期和时间

![image-20210518141229671](https://edu-exer.oss-cn-hangzhou.aliyuncs.com/2021/05/22/typora-user-images/image-20210518014357389.png)

### 三、int 和 和 Integer 有什么区别？

Java 是一个近乎纯洁的面向对象编程语言，但是为了编程的方便还是引入了基本数据类型，为了能够将这些基本 数据类型当成对象操作，Java 为每一个基本数据类型都引入了对应的包装类型（wrapper class），int 的包装类就是Integer，从 Java 5 开始引入了自动装箱/拆箱机制，使得二者可以相互转换。

### 四、String 类常用方法

![image-20210518141659581](https://edu-exer.oss-cn-hangzhou.aliyuncs.com/2021/05/22/typora-user-images/image-20210518141659581.png)

### 五、数据类型之间的转换

**字符串如何转基本数据类型：**调用基本数据类型对应的包装类中的方法 parseXXX(String)或 valueOf(String)即可返回相应基本类型。

**基本数据类型如何转字符串：**一种方法是将基本数据类型与空字符串（“”）连接（+）即可获得其所对应的字符串；另一种方法是调用 String  类中的 valueOf()方法返回相应字符串。