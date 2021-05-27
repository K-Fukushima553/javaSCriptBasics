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

    // -----------------------------------
    //スコープを作ってあげる
    {
      //オブジェクト
      //配列について
      // const score1 = 80;
      // const score2 = 90;
      // const score3 = 40;
      // const otherScores = [40,60];
      // const scores = [80, 90, 40, ...otherScores];
      // console.log(scores);

      // for(let i = 0; i < 3; i++){
      // console.log(`score${i+1}: ${scores[i]}`)
      // }

      // scores.push(80,65);
      // console.log(scores);
      //unshift
      //push
      //shift
      //pop

      // scores.splice(1, 2,70,50);

      // scores.forEach((score, index) => {
      //   console.log(`score${index}: ${score}`)
      // });

      // const prices = [190, 200, 210];
      // const updatePrices = prices.map( price => price + 20 );
      // console.log(updatePrices);

      // const numbers = [1, 4, 7, 8, 10];
      // const evenNumbers = numbers.filter(number => number % 2 === 0);

      // console.log(evenNumbers);

      // const point = {
      //   x: 100,
      //   y: 80,
      // };

      // point.x = 120;
      // point['x'] = 120;
      // console.log(point.x);

      // point.z = 200;
      // delete point.y;
      // console.log(point);
      // console.log(point['z']);

      // const otherProps = {
      //   r: 4,
      //   color: "red",
      // };
      // const point = {
      //   x: 100,
      //   y: 180,
      //   ...otherProps,
      // };

      // console.log(point);

      // const {x, r, ...others} = point;
      // console.log(x);
      // console.log(r);
      // console.log(others);

      // const point = {
      //   x: 100,
      //   y: 180,
      // }

      // const keys = Object.keys(point);
      // keys.forEach(key => {
      //   console.log(`key:${key} value: ${point[key]}`);
      // });

      // let x = [1, 2];
      // let y = [...x] //こうすることでオブジェクトIDの参照ではなく、変数yの新しい領域ができる
      // x[0] = 5;

      // console.log(x);
      // console.log(y);

      // const str = 'hello'
      // console.log(str.length);

      // console.log(str.substring(2, 4));
      
      // const d = [2021, 5, 27];
      // console.log(d.join('/'));

      // const t = '17:30:09'
      // // console.log(t.split(':'));
      // const [hour, minute, second] = t.split(':');
      // console.log(hour);
      // console.log(minute);
      // console.log(second);

      // alert('こんにちは');

      // const ans = confirm('削除しますか？');
      // if (ans){
      //   console.log('削除しました');
      // }else{
      //   console.log('キャンセルしました');
      // }
    //  const cmt = ['a', 'b', 'c'];
    //  let i = 0;

    //  function showTime() {
    //    console.log(new Date());
    //    i++;
    //    if(i > 10){
    //      delete cmt[0];
    //      clearInterval(intervalId);
    //      console.log(cmt);
    //    }
    //   }

    //    const intervalId = setInterval(showTime, 1000);

    class Post{
      constructor(text){
        this.text = text;
        this.likeCount = 0;
      }
      show() {
        console.log(`${this.text} - ${this.likeCount}likes`);
      }

      like(){
        this.likeCount++
        console.log(this.show());
      }

      static showInfo(){
        console.log('Post class version 1.0');
      }
    }

    // const posts = [
    //   new Post('プログラミング楽しい'),
    //   new Post('JavaScript勉強中'),
    // ];
    // posts[0].like();
    // posts[0].show();
    // Post.showInfo();
       
    class SponsoredPost extends Post{
      constructor(text, sponsor){
        super(text);
        this.sponsor = sponsor;
      }
      show() {
        super.show();
        console.log(`... sponsored by ${this.sponsor}`);
      }

      // like(){
      //   this.likeCount++
      //   console.log(this.show());
      // }

      // static showInfo(){
      //   console.log('Post class version 1.0');
      // }
    }

    const posts = [
      new Post('プログラミング楽しい'),
      new Post('JavaScript勉強中'),
      new SponsoredPost('3分で', 'dotinstall')
    ];

    posts[2].show();
    posts[2].like();
    // posts[0].like();
    // posts[0].show();
    // Post.showInfo();
       
     }

      
      
      



    


    
    
