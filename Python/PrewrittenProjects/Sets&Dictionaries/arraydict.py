from abstractdict import AbstractDict
from entry import Entry

class ArrayDict(AbstractDict):
    
    def __init__(self, keys = None, values = None):
        self.items = list()
        AbstractDict.__init__(self, keys, values)
        
    def __iter__(self):
        cursor = 0
        while cursor < len(self):
            yield self.items[cursor].key
            cursor += 1
            
    def __getitem__(self, key):
        index = self.getIndex(key)
        if index == -1:
            raise KeyError("Missing: " + str(key))
        return self.items[index].value
    
    def __setitem__(self, key, value):
        index = self.getIndex(key)
        if index == -1:
            self.items.append(Entry(key, value))
            self.size += 1
        else:
            self.items[index].value = value
            
    def pop(self, key, defaultValue = None):
        index = self.getIndex(key)
        if index == -1:
            return defaultValue
        self.size -= 1
        return self.items.pop(index).value
    
    def getIndex(self, key):
        index = 0
        for nextKey in self:
            if nextKey == key:
                return index
            index += 1
        return -1