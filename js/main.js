'use strict';
    // console.log(typeof 'hello'); //string

    // -----------------------------------
    
    // function sum(a, b, c){
    //   return a + b + c;
    // }
    
    // sum(1, 2, 3);
    // sum(3, 4, 5);
    
    // const total = sum(1, 2, 3) + sum(3, 4, 5);
    // console.log(total);
    
    //return を使うことで関数を呼び出した時に値が返されるためそのまま色々使える
    //returnは宣言終了の役割もある（returnより後の宣言は実行されない)
    
    // -----------------------------------
    
    // const sum = function(a, b, c) {
    //   return a + b + c
    // };

    //関数式での関数は無名関数
    //関数宣言との違いは、関数式はそのまま引数に代入できる
    //関数式は巻き上げされない、関数宣言は巻き上げされる
    //つまり関数式は、宣言してからじゃないと使えない
    //関数式では、式の最後にセミコロンが必要であることに注意
    
    // -----------------------------------
    //アロー関数
    //関数式の簡単な書き方

    // const sum = (a, b, c) =>  a + b + c; //関数がreturnのみの場合は{}省略できる
    // const total = sum(1, 2, 3) + sum(3, 4, 5);
    // console.log(total); //18

    //引数が１つの場合()も省略できる
    // const double = function(a) {
    //     return a * 2;
    //   };

      // const double = a => a * 2;
      // console.log(double(12)); //24


    
    
