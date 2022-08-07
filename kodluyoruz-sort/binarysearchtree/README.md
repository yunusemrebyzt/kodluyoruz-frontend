## Binary Search Tree [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]

- Root 7'dir.

- 5, 7'den küçük olduğu için rootun soluna gelir.

- 1, hem 7'den hem 5'ten küçük olduğu için 5'in soluna gelir.

- 8, 7'den büyük olduğu için rootun sağına gelir.

- 3, 7'den ve 5'ten küçük fakat 1'den büyük olduğu için 1'in sağına gelir

- 6, 7'den küçük ama 5'ten büyük olduğu için 5'in sağına gelir.

- 0, 7'den 5'ten ve 1'den küçük olduğu için 1'in soluna gelir.

- 9, 7'den ve 8'den büyük olduğu için 8'in sağına gelir.

- 4, 7'den ve 5'ten küçük, 1'den ve 3'ten büyük olduğu için 3'ün sağına gelir.

- 2, 7'den ve 5'ten küçük, 1'den büyük ve 3'ten küçük olduğu için 3'ün soluna gelir.
     
     
     
     
               7
             /  \
            5    8
           / \    \
          1   6    9
         / \
        0   3
           / \
          2   4 
