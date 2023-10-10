import java.util.*;
class SumTwo{

    public static void Recursion(int low, int up, int sum){

        if(low==up){
            sum+=low;
            System.out.println(sum);
            return;
        }
        // System.out.println(low);
        sum+=low;
        
        Recursion(low+1, up, sum);

    }
    public static void SumRecursion(int n){
        if(n==10){
            return;
        }
        
        System.out.println(n);

        SumRecursion(n+1);
    }

    public static int fact(int n){
        // int fac=1;
        // for(int i=1; i<=n; i++){
        //     fac *= i;
        // }
        // System.out.println(fac);
            if(n==1 || n==0){
                
                return 1;
            }
            int cal_N = fact(n-1);
            int calFact = n * cal_N;
            return calFact;
        
    }


    public static void reverseNumber(int N){
        int reverse =0;
        while(N!=0){
            int temp = N%10;
            reverse = reverse*10 + temp;
            // int N1 = (reverse * 10);
            N/=10;

            
        }
        System.out.println(reverse);
    }
    public static void reverseString(String name)
    {
        String store = name;
        
        // while(name.length()!=0){
            
        // }

        StringBuilder sb = new StringBuilder(name);

        sb.reverse();

        System.out.println(sb.toString());

    }

    public static void reverseStringRecursion(String name, int indx){
        if(indx==0){
            System.out.println(name.charAt(indx));
            return;
        }
        System.out.print(name.charAt(indx));
        reverseStringRecursion(name, indx-1);
    }

    public static void trackString(String name, char A){
        
    }

    public static void Number(int number, int N)
    {
        int count=0;

        while(number!=0)
        {
            int temp = number%10;
            if(temp==N){
                count++;
            }
            number/=10;
        }
        System.out.println(count);
    }
    public static void main(String[] args) {
        // int a =10;
        // int b=39;
        // int sum = a+b;
        // System.out.println(sum);

        // Recursion(1, 10, 0);
        
        // System.out.println(fact(5));

        // Number(1222255566, 5);
        // SumRecursion(1);

        // reverseNumber(123);

        // reverseString("HI Timtim");
        // String name = "Hi timtim";
        // reverseStringRecursion(name, name.length()-1);

        int[] number = {4, 5, 6, 3, 7, 9, 8, 3, 3};

        int target = 3;
        int[] newNumber = new int[10];

        Arrays.sort(number);
        System.out.println(Arrays.toString(number));

        // for(int i=0; i<number.length; i++){
        //     if(number[i]==target){
        //         // System.out.println(i);
        //         newNumber[i] = i;
                
        //     }
        //     else{
        //         System.out.println(-1);
        //     }
        // }
        // System.out.println(Arrays.toString(newNumber));

        // Arrays.reverse(number);
        // for(int i=0; i<number.length/2; i++){
        //     if(number[i]<number[number.length -1-i])
        //     {
        //         int temp = number[i];
        //         number[i] = number[number.length -1-i];
        //         number[number.length -1-i]=temp;
        //     }
        // }
        // System.out.println(Arrays.toString(number));

        
    //     int[] num1 = reverse(number);
    //     System.out.println(Arrays.toString(num1));
    //     int res = arrayToNumber(number);
    //     System.out.println(res);

            
    }


    public static int arrayToNumber(int[] number){
        int res=0;
        for(int i=0;i<number.length;i++) {
         res=res*10+number[i];
        }
        return res;
    }
    public static int[] reverse(int[] number){
        for(int i=0; i<number.length/2; i++){
            if(number[i]<number[number.length -1-i])
            {
                int temp = number[i];
                number[i] = number[number.length -1-i];
                number[number.length -1-i]=temp;
            }
        }

        return number;
    }
}