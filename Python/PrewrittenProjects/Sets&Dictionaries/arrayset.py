from arraybag import ArrayBag
from abstractset import AbstractSet

class ArraySet(AbstractSet, ArrayBag):
    
    def __init__(self, sourceCollection = None):
        ArrayBag.__init__(self, sourceCollection)
        
    def add(self, item):
        if not item in self:
            ArrayBag.add(self, item)