
.global loop

	loop:
	stmfd sp!,{lr}
	cmp r1,#0
	ldmeqia sp!,{pc}
	sub r1,r1,#1
	bl loop
	ldr r3,[r0,r2]
	add r2,r2,#4
	ldr r5,[r0,r2]
	add r7,r3,r5
	str r7,[r0,r2]
	ldmia sp!,{pc}

	
