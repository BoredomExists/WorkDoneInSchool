from arrays import Array
from abstractstack import AbstractStack

class ArrayStack(AbstractStack):
    DEFAULT_CAPACITY = 10
    
    def __init__(self, sourceCollection = None):
        self.items = Array(ArrayStack.DEFAULT_CAPACITY)
        AbstractStack.__init__(self, sourceCollection)
        
    def __iter__(self):
        cursor = 0
        while cursor < len(self):
            yield self.items[cursor]
            cursor += 1
            
    def peek(self):
        return self.items[len(self) - 1]
    
    def clear(self):
        self.size = 0
        self.items = Array(ArrayStack.DEFAULT_CAPACITY)
        
    def push(self, item):
        self.items[len(self)] = item
        self.size += 1
        
    def pop(self):
        oldItem = self.items[len(self) - 1]
        self.size -= 1
        return oldItem