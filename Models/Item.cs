using System;
using System.Collections.Generic;

namespace LOLHandBook.Models{
    public class Item{
        public int id;
        public string name;
        public int price;
        public List<Item> upItems; //向上合成列表
        public List<Item> materials; 
        public String picturePath;
        public Dictionary<ItemAttribute,Object> attributes;
        public Dictionary<String,Object> function;

     
    }


}