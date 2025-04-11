class ArrayListIterator(object):
    
    def __init__(self, backingStore):
        self.backingStore = backingStore
        self.modCount = backingStore.getModCount()
        self.first()
        
    def first(self):
        self.cursor = 0
        self.lastItemPos = -1
        
    def hasNext(self):
        return self.cursor < len(self.backingStore)
    
    def next(self):
        if not self.hasNext():
            raise ValueError("No next item in list iterator")
        if self.modCount != self.backingStore.getModCount():
            raise AttributeError("Illegal modication of backing store")
        self.lastItemPos = self.cursor
        self.cursor += 1
        return self.backingStore[self.lastItemPos]
    
    def last(self):
        self.cursor = len(self.backingStore)
        self.lastItemPos = -1
        
    def hasPrevious(self):
        return self.cursor > 0
    
    def previous(self):
        if not self.hasPrevious():
            raise ValueError("No previous item in list iterator")
        if self.modCount != self.backingStore.getModCount():
            raise AttributeError("Illegal modification of backing store")
        self.cursor -= 1
        self.lastItemPos = self.cursor
        return self.backingStore[self.lastItemPos]
    
    def replace(self, item):
        if self.lastItemPos == -1:
            raise AttributeError("The current position is undefined.")
        if self.modCount != self.backingStore.getModCount():
            raise AttributeError("List has been modified illegally.")
        self.backingStore[self.lastItemPos] = item
        self.lastItemPos = -1
        
        def insert(self, item):
            if self.modCount != self.backingStore.getModCount():
                raise AttributeError("List has been modified illegally.")
            if self.lastlastItemPos == -1:
                self.backingStore.add(item)
            else:
                self.backingStore.insert(self.lastItemPos, item)
            self.lastItemPos = -1
            self.modCount += 1
            
        def remove(self):
            if self.lastItemPos == -1:
                raise AttributeError("The current position is undefined.")
            if self.modCount != self.backingStore.getModCount():
                raise AttributeError("List has been modified illegally.")
            item = self.backingStore.pop(self.lastItemPos)
            if self.lastItemPos < self.cursor:
                self.cursor -= 1
            self.modCount += 1
            self.lastItemPos = -1