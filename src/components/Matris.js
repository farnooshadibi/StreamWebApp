import React, {Component} from 'react'

class Matris extends Component {
constructor() {
    super();
    this.state={
    }
  }
incrementCount = () =>  {
     let arr = [[1,1, 1, 1, 0, 0],[1,1, 1, 1, 0, 0],[1,1, 1, 1, 1,1],[1,1, 1, 1, 1,1],[1,1, 1, 1, 1,1]];
     var r = [];
     var numOfRow = 0;
     var area =0;
     let widthConst = 0;
     for (let i = 0; i < arr.length-1; i++) {
         for (let j = 0; j < arr[i].length-1; j++) { //j=1, i=1
                if(arr[i][j] === 0){
                  var width = 0 ;
                  for(let k = j ; k < arr[i].length - j + 1  ; k ++){ // سطر اول k= 1 , j = 1 TODO
                    console.log("k",k)
                    if (arr[i][k] === 0){ width++;
                    console.log("w",width)}
                    else{break;}
                  }

                   for(let kk = i + 1 ; kk < arr.length  ; kk++ ){
                     let width2 = 0;
                     console.log("kk",kk)
                        for(let m = j ; m < arr[i].length - j + 1  ; m++){ // j=1, i=2
                            console.log('m', m);
                            if (arr[kk][m] === 0) { width2++; }
                            //else{break;}
                        }
                        console.log('width2',width2);
                        console.log('width',width);
                        if(width === width2 &&  width!== 0 && width2!== 0){
                          console.log('succeed');
                          numOfRow++;
                        }
                        if(width !== width2 ){
                            console.log('Notsucceed');
                          }

                        if(widthConst !== width2 ){
                          break;
                        }                       
                   }
                   break;
                }
         }
     }
     console.log('Number of row of Rectangle:', numOfRow+1)
     var height = numOfRow+1;
     area = width * height;
     console.log("Area:", area)
}
render() {
    return (
      <div>
        <button className="increment" onClick={this.incrementCount}>Click</button>
      </div>
    )
  }
}

export default Matris;
