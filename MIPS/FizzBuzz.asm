    .data
newLine: .asciiz "\n"
FIZZ: .asciiz "FIZZ"
BUZZ: .asciiz "BUZZ"
FIZZBUZZ: .asciiz "FIZZBUZZ"
    .text

main:
    li $t0, 1       # Initialize i, Starting point for loop
    li $t1, 100     # Initialize stopping point for loop
    li $t2, 3       # Initialize value 3 to check if $t0 is divisible by 3
    li $t3, 5       # Initialize value 5 to check if $t0 is divisible by 5

loop:
    bgt $t0, $t1, endLoop

    rem $t4, $t0, $t2               # $t4 is remainder of "rem" operation for $t2
    rem $t5, $t0, $t3               # $t5 is remainder of "rem" operation for $t3
    
    beq $0, $t4, checkREM           # Checks if the remainder of the rem op for 3 is equals to 0, if so goes to check if rem op for 5 is also 0
    beq $0, $t5, printBUZZ          # Checks if the remainder of the rem op for 5 is equals to 0

    move $a0, $t0
    li $v0, 1
    syscall

    j increment
    

checkREM:
    beq $0, $t5, printFIZZBUZZ      # Checks if the remainder of the rem op for 5 is also 0, if so, goes to print FIZZBUZZ, otherwise prints FIZZ
    la $a0, FIZZ            
    li $v0, 4
    syscall

    j increment

printFIZZBUZZ:
    la $a0, FIZZBUZZ
    li $v0, 4
    syscall

    j increment

printBUZZ:
    la $a0, BUZZ
    li $v0, 4
    syscall

    j increment

increment:              # Increments loop
    la $a0, newLine
    li $v0, 4
    syscall
    addi $t0, $t0, 1
    j loop

endLoop:
    li $v0, 10
    syscall