from arrays import Array
from abstractlist import AbstractList
from arraylistiterator import ArrayListIterator

class ArrayList(AbstractList):
    DEFAULT_CAPACITY = 10
    
    def __init__(self, sourceCollection = None):
        self.items = Array(ArrayList.DEFAULT_CAPACITY)
        AbstractList.__init__(self, sourceCollection)
        
    def __iter__(self):
        cursor = 0
        while cursor < len(self):
            yield self.items[cursor]
            cursor += 1
            
    def __getitem__(self, i):
        if i < 0 or i >= len(self):
            raise IndexError("List index out of range")
        return self.items[i]
    
    def __setitem__(self, i, item):
        if i < 0 or i >= len(self):
            raise IndexError("List index out of range")
        self.items[i] = item
        
    def insert(self, i, item):
        if i < 0: i = 0
        elif i > len(self): i = len(self)
        if i < len(self):
            for j in range(len(self), i, -1):
                self.items[j] = self.items[j - 1]
        self.items[i] = item
        self.size += 1
        self.incModCount()
        
    def pop(self, i = None):
        if i == None: i = len(self) - 1
        if i < 0 or i >= len(self):
            raise IndexError("List index out of range")
        item = self.items[i]
        for j in range(i, len(self) - 1):
            self.items[j] = self.items[j + 1]
        self.size -= 1
        self.incModCount()
        return item
    
    def listIterator(self):
        return ArrayListIterator(self)