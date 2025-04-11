    .data
newLine: .asciiz "\n"
introduction: .asciiz "Welcome to Choose Your Own Adventure app. Would you like Door #1 or Door #2? "
recursionIntro: .asciiz "Wonderful, I calculate the greatest common factor of two numbers for you"
recursionNum1: .asciiz "Enter the first number: "
recursionNum2: .asciiz "Enter the second number: "
recursionAnswer: .asciiz "The greatest common factor is: "
arrayIntro: .asciiz "I will calculate the sum of numbers within an Array, How many numbers would you want in the array: "
arrayAnswer: .asciiz "The sum of the numbers in the array is: "
iterator: .word 0
    .text

main:
    # Preset Conditions | Do not need to preset 2 considering if they did not choose 1, then its 2
    li $s0, 1

    # Print the Greeting
    la $a0, introduction
    li $v0, 4
    syscall

    # Read the input from the user for the greeting
    li $v0, 5
    syscall
    move $t0, $v0

    jal moveToNewLine
    # Check if user inputted 1 (recursion) or 2 (array)
    beq $t0, $s0, recursion
    j array

array:
    lw $t0, iterator    # Load the iterator
    la $a0, arrayIntro  # Print the greeting
    li $v0, 4
    syscall

    li $v0, 5           # Read from the user
    syscall
    move $t1, $v0       # Move the user's input to $t1

    sll $s1, $t1, 2     # Shift the user's input by 4 bytes for memory allocation
    move $a0, $s1
    li $v0, 9           # Syscall for sbrk which is for dynamic memory allocation
    syscall
    move $s2, $v0       # Gets the memory allocation stores in $s2

beginLoop:
    bge $t0, $t1, printArray    # Checks if the iterator is >= the size of the array
    
    sll $t2, $t0, 2             # Shifts the bit of the current index twice
    addu $t9, $s2, $t2          # $t2 now has the next slot in the array
    addi $t3, $t0, 1            # Generate value for a[i] = i + 1
    sw $t3, 0($t9)              # Store value in array[i]
    addu $t4, $t4, $t3          # sum = sum + $t3 (current item)
    
    addi $t0, $t0, 1            # increment i
    j beginLoop

printArray:
    # Prints the array side outro
    la $a0, arrayAnswer
    li $v0, 4
    syscall

    # Prints the number answer
    move $a0, $t4
    li $v0, 1
    syscall

    j exit

recursion:
    # Prints the recursion side intro
    la $a0, recursionIntro
    li $v0, 4
    syscall

    # Reads the user's first input
    jal moveToNewLine
    la $a0, recursionNum1
    li $v0, 4
    syscall
    
    li $v0, 5
    syscall
    move $s0, $v0       # Store the first input in $s0

    # Reads the user's second input
    jal moveToNewLine
    la $a0, recursionNum2
    li $v0, 4
    syscall

    li $v0, 5
    syscall
    move $s1, $v0       # Store the second input in $s1

    # Jumps to GCF
    jal GCF

    # Prints the recursion side answer
    la $a0, recursionAnswer
    li $v0, 4
    syscall

    move $a0, $s2
    li $v0, 1
    syscall

    j exit

GCF:
    # Manage the stack
    subu $sp, $sp 8     # make space to store 2 values (4 bytes each)
    sw $ra, 0($sp)      # we just moved $sp, so this is at the new location
    sw $s5, 4($sp)      # hold $s5 for the progressive product
    
    # if the second value is 0, then jump to recursion done
    beq $s1, $0, recursionDone
    
    # Recursion for GCF(a, b): GCF(b, a % b)
    div $s0, $s1        # a / b
    mfhi $t0            # $t0 <- a % b
    move $s0, $s1       # Move old value of b to a
    move $s1, $t0       # Move the new value of b to $s1

    jal GCF             # Recursion

recursionDone:
    # Restore active values from the stack
    lw $ra, 0($sp)      # restore return address
    lw $s5, 4($sp)      # $s0 (crucial for the running product)
    addu $sp, $sp, 8    # release the memory in the stack

    move $s2, $s0
    jr $ra

moveToNewLine:
    la $a0, newLine
    li $v0, 4
    syscall

    jr $ra

exit:
    li $v0, 10
    syscall