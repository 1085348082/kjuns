---
title: JavaSE IO
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

## Java 的 IO

### 一、Java 中有几种类型的流

![image-20210518142335351](https://edu-exer.oss-cn-hangzhou.aliyuncs.com/2021/05/22/typora-user-images/image-20210518142335351.png)

![image-20210518142316275](https://edu-exer.oss-cn-hangzhou.aliyuncs.com/2021/05/22/typora-user-images/image-20210518142316275.png)

### 二、字节流如何转为字符流

- 字节输入流转字符输入流通过 InputStreamReader 实现，该类的构造函数可以传入 InputStream 对象。 
- 字节输出流转字符输出流通过 OutputStreamWriter 实现，该类的构造函数可以传入 OutputStream 对象。

### 三、如何将一个 java 对象序列化到文件里！

须先实现 Serializable 接口

```java
1. //对象输出流
2. ObjectOutputStream objectOutputStream = 
3. new ObjectOutputStream(new FileOutputStream(new File("D://obj")));
4. objectOutputStream.writeObject(new User("zhangsan", 100));
5. objectOutputStream.close();
6. //对象输入流
7. ObjectInputStream objectInputStream = 
8. new ObjectInputStream(new FileInputStream(new File("D://obj")));
9. User user = (User)objectInputStream.readObject();
10. System.out.println(user);
11. objectInputStream.close();
```

### 四、字节流和字符流的区别

字节流读取的时候，读到一个字节就返回一个字节； 字符流使用了字节流读到一个或多个字节（中文对应的字节 数是两个，在 UTF-8 码表中是 3 个字节）时。先去查指定的编码表，将查到的字符返回。 **字节流可以处理所有类型数 据，如：图片，MP3，AVI 视频文件，而字符流只能处理字符数据。**只要是处理纯文本数据，就要优先考虑使用字符 流，除此之外都用字节流。字节流主要是操作 byte 类型数据，以 byte 数组为准，主要操作类就是 OutputStream、 InputStream。

**字符流处理的单元为 2 个字节**的 Unicode 字符，分别操作字符、字符数组或字符串，而**字节流处理单元为 1 个字 节**，操作字节和字节数组。所以字符流是由 Java 虚拟机将字节转化为 2 个字节的 Unicode 字符为单位的字符而成的， 所以它对多国语言支持性比较好！如果是音频文件、图片、歌曲，就用字节流好点，如果是关系到中文（文本）的，用 字符流好点。在程序中一个字符等于两个字节，**java 提供了 Reader、Writer 两个专门操作字符流的类**。

### 五、如何实现对象克隆？

- 实现 Cloneable 接口并重写 Object 类中的 clone()方法；
- 实现 Serializable 接口，通过对象的序列化和反序列化实现克隆

### 六、什么是 java 序列化，如何实现 java 序列化？

序列化就是一种用来处理对象流的机制，所谓对象流也就是将对象的内容进行流化。**可以对流化后的对象进行读写操作，也可将流化后的对象传输于网络之间。序列化是为了解决在对对象流进行读写操作时所引发的问题。**

**序 列 化 的 实 现 ：** 将 需 要 被 序 列 化 的 类 实 现 Serializable 接 口 ， 该 接 口 没 有 需 要 实 现 的 方 法 ， implements Serializable 只是为了标注该对象是可被序列化的，然后使用一个输出流(如：FileOutputStream)来构造 一个 ObjectOutputStream(对象流)对象，接着，使用 ObjectOutputStream 对象的 writeObject(Object obj)方法就 可以将参数为 obj 的对象写出(即保存其状态)，要恢复的话则用输入流。
