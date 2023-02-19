from node import Node
from abstractstack import AbstractStack

class LinkedStack(AbstractStack):
    
    def __init__(self, sourceCollection = None):
        self.items = None
        AbstractStack.__init__(self, sourceCollection)
        
    def __iter__(self):
        def visitNodes(node):
            if node != None:
                visitNodes(node.next)
                tempList.append(node.data)
        tempList = list()
        visitNodes(self.items)
        return iter(tempList)
    
    def peek(self):
        if self.isEmpty():
            raise KeyError("The stack is empty.")
        return self.items.data
    
    def clear(self):
        self.size = 0
        self.items = None
        
    def push(self, item):
        self.items = Node(item, self.items)
        self.size += 1
        
    def pop(self):
        if self.isEmpty():
            raise KeyError("The stack is empty.")
        oldItem = self.items.data
        self.items = self.items.data
        self.size -= 1
        return oldItem