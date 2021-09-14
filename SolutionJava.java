
import java.util.*;

class Main {
	public static void main (String[] args) {
		int num=3;
		
		int start=1;
		int end=num;
		int ans=0;
		while(start<=end){
		    int mid=start+(end-start)/2;
		    if(mid*mid==num){
		        System.out.println(mid);
		        return;
		    }
		    else if(mid*mid<num){
		        ans=mid;
		        start=mid+1;
		    }
		    else{
		        end=mid-1;
		    }
		}
		System.out.println(ans);
	}
}
