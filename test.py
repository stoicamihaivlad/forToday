from main import Graph, Node
import time


def func1():
    time.sleep(5)
    return 3

def func2():
    time.sleep(5)
    return 5

def func3():
    time.sleep(15)
    return 7

def func4():
    time.sleep(80)
    return 11

def func5():
    return 13

def func6():
    return 15

def func7():
    return 17


a = Node("A", func1)
b = Node("B", func2)
c = Node("C", func3)
d = Node("D", func4)
e = Node("E", func5)
f = Node("F", func6)
h = Node("H", func7)

g = Graph()
g.add_node(a)
g.add_node(c)
g.add_node(b)
g.add_node(d)
g.add_node(e)
g.add_node(f)
g.add_node(h)

g.add_edge(a, b)
g.add_edge(a, c)
g.add_edge(b, d)
g.add_edge(b, e)
g.add_edge(e, f)
g.add_edge(c, d)
g.add_edge(f, h)
g.add_edge(d, h)
g.traverse()