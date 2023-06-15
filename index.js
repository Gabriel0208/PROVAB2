// 1)
function Nprimo(){
    x = parseInt(prompt('Digite um número: '));

    if (x < 2) {
        console.log(x + " não é primo!");
    } else {
         y = true;
        for (var i = 2; i < x; i++) {
            if (x% i === 0) {
                y = false;
                break;
            }
        }
        
        if (y) {
            console.log(x + ' é primo!');
        } else {
            console.log(x + ' não é primo!');
        }
    }
    console.log('Aqui esta uma lista dos números primos de 1 até 1000: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113 127 131 137 139 149 151 157 163 167 173 179 181 191 193 197 199 211 223 227 229 233 239 241 251 257 263 269 271 277 281 283 293 307 311 313 317 331 337 347 349 353 359 367 373 379 383 389 397 401 409 419 421 431 433 439 443 449 457 461 463 467 479 487 491 499 503 509 521 523 541 547 557 563 569 571 577 587 593 599 601 607 613 617 619 631 641 643 647 653 659 661 673 677 683 691 701 709 719 727 733 739 743 751 757 761 769 773 787 797 809 811 821 823 827 829 839 853 857 859 863 877 881 883 887 907 911 919 929 937 941 947 953 967 971 977 983 991 997')
    
    
    
}

//2)

function checksenha() {
    s = prompt('Digie uma senha: ')
  
    if (s.length < 8) {
        console.log('Senha invalida')
      return false;
    }
  
    
    let Mai = false;
    let Min = false;
    let Num = false;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] >= 'A' && s[i] <= 'Z') {
        Mai = true;
      } else if (s[i] >= 'a' && s[i] <= 'z') {
       Min = true;
      } else if (s[i] >= '0' && s[i] <= '9') {
        Num = true;
      }
  
     
      if (Mai && Min && Num) {
        console.log('Senha válida')
        return true;
        
      }
     
     
 
  }

    console.log('Senha invalida')
    return false;
}

// 3)

function calcfat(){

    n = parseInt(prompt('Digite um número: '));
    f = 1
    
    for(i = 1; i <= n ; i++){
    
        f *= i
    }
      console.log('O fatorial de '+ n  + ' é ' + f)

      console.log('Fatorial de 1: 1! = 1 Fatorial de 2:  2! = 2 Fatorial de 3: 3! = 6 Fatorial de 4: = 24 Fatorial de 5: 5!  = 120 Fatorial de 6: 6! = 720 Fatorial de 7: 7! = 5040 Fatorial de 8: 8! = 40320 Fatorial de 9: 9!= 362.880 Fatorial de 10: 10!= 3.628.800')
    }


 // 4)
 
 function raizcerta(){
    x = parseFloat(prompt('Digite um numero: '))

    if (x < 0) {
        console.log('Não é quadrado perfeito')
        return false;
    }

    for (var i = 1; i <= x/2; i++) {
        if (i * i === x) {
            console.log('É quadrado perfeito')
            return true; 
        }
    }
    console.log('Não é quadrado perfeito')
    return false; 
}
  
