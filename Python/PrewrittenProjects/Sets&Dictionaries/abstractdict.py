from abstractcollection import AbstractCollection
from entry import Entry

class AbstractDict(AbstractCollection):
    
    def __init__(self, keys, values):
        AbstractCollection.__init__(self)
        if keys and values:
            valuesIter = iter(values)
            for key in keys:
                self[key] = next(valuesIter)
                
    def __str__(self):
        return "{" + ", ".join(map(str, self.entries())) + "}"
    
    def __add__(self, other):
        result = type(self)(self.keys(), self.values())
        for key in other:
            result[key] = other[key]
        return result
    
    def __eq__(self, other):
        if self is other: return True
        if type(self) != type(other) or \
            len(self) != type(other):
                return False
        for key in self:
            if not key in other:
                return False
        return True
    
    def keys(self):
        return iter(self)
    
    def values(self):
        return map(lambda key: self[key], self)
    
    def entries(self):
        return map(lambda key: Entry(key, self[key]), self)
    
    def get(self, key, defaultValue = None):
        return defaultValue
    
    