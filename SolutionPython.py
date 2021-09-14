import math

def Square(a, b, c):
	mid = (b + c) / 2
	multiply = mid * mid
	if ((multiply == a) or (abs(multiply - a) < 0.00001)):
		return mid
	elif (multiply < a):
		return Square(a, mid, c)
	else:
		return Square(a, b, mid)

def findSqrt(x):
	y = 1
	gotsqrt = False
	while (gotsqrt == False):
		if (y * y == x):
			print("Square Root: ", y)
			gotsqrt = True
		elif (y * y > x):
			sqrt = Square(x, y - 1, y)
			print ("Square Root: ", "{0:.3f}".format(sqrt))
			gotsqrt = True
		y = y + 1

if __name__ == '__main__':
	n = int(input("Enter a Number: "))
	findSqrt(n)
