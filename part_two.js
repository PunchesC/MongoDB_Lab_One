1.
db.people.insertOne({first_name: 'Jackie',
  last_name: 'Chan',
  email: 'JackieChan@gmail.com',
  gender: 'Male',
  age: 55,
  state: 'California',
  children: [] }
);

2.
db.people.insertOne({first_name: 'Ash',
  last_name: 'Ketchum',
  email: 'GottaCatchThemAll@gmail.com',
  gender: 'Male',
  age: 45,
  state: 'Alaska',
  children: [{name:"Misty", age:"20"},{name:"Brock",age:"20"}]}
);

3.
db.people.updateOne(
  {first_name: "Clarence"},
  {$set: {state: "South Dakota"}}
)

4.
db.people.updateOne(
  {first_name:"Rebecca", last_name:"Hayes"},
  {$unset: {email:1}}
);

5.
db.people.updateMany(
  {state:"Missouri"},
  {$inc: {age:1}}
)

6.
db.people.replaceOne(
  {first_name:"Jerry", last_name:"Baker"},
  { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }
)

7.
db.people.deleteOne({first_name:"Wanda", 
last_name: "Bowman"});

8.
db.people.deleteMany({email:null})

9.
db.submissions.insertMany([
  {title: "The River Bend", upvotes: 10, downvotes: 2, artist: {_id:"Anna Howard"}},
  {title: "Nine Lives", upvotes: 7, downvotes: 0, artist: {_id:"Scott Henderson"}},
  {title: "Star Bright", upvotes: 19, downvotes: 3, artist: {_id:"Andrea Burke"}},
  {title: "Why Like This?", upvotes: 1, downvotes: 5, artist: {_id:"Steven Marshall"}},
  {title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: {_id:"Gerald Bailey"}}
]);

10.
db.submissions.updateOne({title:"The River Bend"}, 
{$inc:{upvotes:2}
}
);

11.
db.submissions.updateMany(
  {upvotes: {$gte: 10}},
  {$set:{round2:true}}
);
