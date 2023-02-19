class AbstractSet(object):
    
    def __or__(self, other):
        return self + other
    
    def __and__(self, other):
        intersection = type(self)()
        for item in self:
            if item in other:
                intersection.add(item)
        return intersection
    
    def __sub__(self, other):
        difference = type(self)()
        for item in self:
            if not item in other:
                difference.add(item)
        return difference
    
    def issubset(self, other):
        for item in self:
            if not item in other:
                return False
        return True

    def __eq__(self, other):
        if self is other: return True
        if type(self) != type(other) or \
            len(self) != len(other):
            return False
        for item in self:
            if self.count(item) != other.count(item):
                return False