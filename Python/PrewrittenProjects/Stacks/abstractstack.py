from abstractcollection import AbstractCollection

class AbstractStack(AbstractCollection):
    
    def __init__(self, sourceCollection):
        AbstractCollection.__init__(self, sourceCollection)
        
    def add(self, item):
        self.push(item)