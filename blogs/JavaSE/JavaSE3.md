---
title: JavaSE 集合
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

## Java 集合

### 一、List 的三个子类的特点

- ArrayList 底层结构是数组,底层查询快,增删慢。 
- LinkedList 底层结构是链表型的,增删快,查询慢。 
- voctor 底层结构是数组 线程安全的,增删慢,查询慢。

### 二、List 和 Map、Set 的区别

**结构特点：**

List 和 Set 是存储单列数据的集合，Map 是存储键和值这样的双列数据的集合。

List 中存储的数据是有顺序，并且允许重复；

Map 中存储的数据是没有顺序的，其键是不能重复的，它的值是可以有重复的，

Set 中存储的数据是无序的，且不允许有重复，但元素在集合中的位置由元素的 hashcode 决定，位置是固定的

**实现类：**

List 接口有三个实现类（**LinkedList：**基于链表实现，链表内存是散乱的，每一个元素存储本身内存地址的同时还 存储下一个元素的地址。链表增删快，查找慢；**ArrayList：**基于数组实现，非线程安全的，效率高，便于索引，但不 便于插入删除；**Vector：**基于数组实现，线程安全的，效率低）。

Map 接口有三个实现类（**HashMap：**基于 hash 表的 Map 接口实现，非线程安全，高效，支持 null 值和 null 键；**HashTable：**线程安全，低效，不支持 null 值和 null 键；**LinkedHashMap：**是 HashMap 的一个子类，保存了 记录的插入顺序；SortMap 接口：TreeMap，能够把它保存的记录根据键排序，默认是键值的升序排序）。

Set 接口有两个实现类（**HashSet：**底层是由 HashMap 实现，不允许集合中有重复的值，使用该方式时需要重写 equals()和 hashCode()方法；LinkedHashSet：继承与 HashSet，同时又基于 LinkedHashMap 来进行实现，底层使用的是 LinkedHashMap）。

**区别：**

List 集合中对象按照索引位置排序，可以有重复对象，允许按照对象在集合中的索引位置检索对象，例如通过 list.get(i)方法来获取集合中的元素；Map 中的每一个元素包含一个键和一个值，成对出现，键对象不可以重复，值对 象可以重复；Set 集合中的对象不按照特定的方式排序，并且没有重复对象，但它的实现类能对集合中的对象按照特定 的方式排序，例如 TreeSet 类，可以按照默认顺序，也可以通过实现 Java.util.Comparator接口来自定义排序 方式。

### 三、HashMap 和 HashTable 有什么区别?

HashMap 是线程不安全的,HashMap 是一个接口,是 Map 的一个子接口,是将键映射到值得对象,不允许键值重复,允许空键和空值;由于非线程安全,HashMap 的效率要较 HashTable 的效率高一些。

HashTable 是线程安全的一个集合,不允许 null 值作为一个 key 值或者 Value 值;

HashTable 是 sychronize,多个线程访问时不需要自己为它的方法实现同步,而 HashMap 在被多个线程访问的时 候需要自己为它的方法实现同步;

### 四、链表和数组使用场景

**数组应用场景：**数据比较少；经常做的运算是按序号访问数据元素；数组更容易实现，任何高级语言都支持；构建的线性表较稳定。 

**链表应用场景：**对线性表的长度或者规模难以估计；频繁做插入删除操作；构建动态性比较强的线性表。

### 五、Java 中 ArrayList 和 Linkedlist 区别？

ArrayList 和 Vector 使用了数组的实现，可以认为 ArrayList 或者 Vector 封装了对内部数组的操作，比如向数组 中添加，删除，插入新的元素或者数据的扩展和重定向。

LinkedList 使用了循环双向链表数据结构。

**ArrayList 和 LinkedList 在性能上各有优缺点：**

1. 对 ArrayList 和 LinkedList 而言，在列表末尾增加一个元素所花的开销都是固定的。对 ArrayList 而言，主 要是在内部数组中增加一项，指向所添加的元素，偶 尔可能会导致对数组重新进行分配；而对 LinkedList 而言，这 个开销是统一的，分配一个内部 Entry 对象。
2. LinkedList 不支持高效的随机元素访问。
3. ArrayList 的空间浪费主要体现在在 list 列表的结尾预留一定的容量空间，而 LinkedList 的空间花费则体现在 它的每一个元素都需要消耗相当的空间。

可以这样说：当操作是在一列数据的后面添加数据而不是在前面或中间,并且需要随机地访问其中的元素时,使用ArrayList 会提供比较好的性能；当你的操作是在一列数据的前面或中间添加或删除数据,并且按照顺序访问其中的元 素时,就应该使用 LinkedList 了。

