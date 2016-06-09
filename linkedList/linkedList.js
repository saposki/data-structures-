function Node(data, next){
   this.data = data;
   this.next = next;
}


function LinkedList(){
   this.head = new Node(null, null);
   this.length = 0;
}

LinkedList.prototype = {
   jsout:function(){
      console.log(this.length);
   },
   jsin:function(data){
      if(this.head.data == null){
         this.head = new Node(data,null);
      }else{
         var current = this.head;
         var node = new Node(data,null);
         if(current.next == null){
            current.next = node;
         }
         this.head.next = data;
      }
      this.length += 1;
   }
}

var List = new LinkedList();
// List.jsin(8);
// List.jsin(2);
// List.jsout();
