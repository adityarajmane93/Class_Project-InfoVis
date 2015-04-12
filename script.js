cursor = db.accern.find({});
while(cursor.hasNext()){
	if(cursor.next().harvested_at.getFullYear()==2015){
		if(cursor.next().harvested_at.getHours()>=16||cursor.next().harvested_at.getHours()<=9){
 	   		printjson(cursor.next());
 		}
	}
}