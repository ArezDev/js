if(window.location.hostname.includes('facebook') === true) {
    var dnama = ["Lawrence", "Rogers", "Murphy", "Paty", "Lynne", "Roberson", "Tina", "Norman", "Mcbride", "Clara", "Joan", "Lula", "Charlene", "Welch", "June", "Jacquelyn", "Morrison", "Felicia", "Jacqueline", "Kathryn", "Jessica", "Carlson", "Samantha", "Obrien", "Love", "Chandler", "Joyce", "Russell", "Aguilar", "Maria", "Juana", "Jamie", "Emily", "Nelson", "Hazel", "Judith", "Ellen", "Celia", "Shannon", "Gilbert", "Patrick", "Santiago", "Brandy", "Lambert", "Blanche", "Martin", "Gutierrez", "Vega", "Reyes", "Sheri", "Palmer", "Wilma", "Mabel", "Gina", "Elliott", "Sherry", "Judy", "Heather", "Chavez", "Atkins", "Ramsey", "Massey", "Barnes", "Leona", "Dorothy", "Townsend", "Hale", "Beatrice", "Wendy", "Lucy", "Paula", "Phelps", "Boone", "Cannon", "Rodriquez", "Hicks", "Yvonne", "Nichols", "Ida", "Gayle", "Parker", "Gonzalez", "Poole", "Wise", "Flores", "Munoz", "Sherman", "Sarah", "Ball", "Lopez", "Johnston", "Joseph", "Long", "Morales", "Page", "Michele", "Freeman", "Buchanan", "Clayton", "Torres", "Alvarado", "Bernice", "Roxanne", "Castro", "Burns", "Anna", "Vanessa", "Jenkins", "Monique", "Foster", "Frank", "Dora", "Knight", "Joanna", "Terry", "Pierce", "Schultz", "Ruth", "Norris", "Clark", "Powers", "Jackie", "Tyler", "Elsie", "Alberta", "Moody", "Horton", "Holland", "Carole", "Blair", "Cummings", "Casey", "Tamara", "Wood", "Garcia", "Pearl", "Daisy", "Stanley", "Kristen", "Joy", "Walker", "Brock", "Rebecca", "Tonya", "Glenda", "Anita", "Irma", "Lowe", "Eleanor", "Sanchez", "Velma", "Kara", "Burnett", "Vargas", "Alison", "Christy", "Ryan", "Edwards", "Fitzgerald", "Evelyn", "Karla", "Warren", "Inez", "Shelley", "Norton", "Lydia", "Fields", "Bowman", "Robin", "Holt", "Craig", "Mathis", "Harmon", "Sanders", "Wilkerson", "Medina", "Curtis", "Yolanda", "Ward", "Smith", "Beck", "Huff", "Kelley", "Rhonda", "Natalie", "Brown", "Hubbard", "Edith", "Patton", "Hawkins", "Manning", "Pearson", "Summers", "Spencer", "Josephine", "Lori", "Mullins", "Iris", "Melanie", "Juanita", "Hogan", "Marsh", "Dolores", "Bass", "Beth", "Pitts", "Sherri", "Geneva", "Toni", "Rivera", "Mae", "Lillian", "Holmes", "Vicky", "Stacy", "Steele", "Harriet", "Debbie", "Mcdonald", "Doyle", "Lauren", "Patty", "Rios", "Arlene", "Tammy", "Denise", "Doris", "Conley", "Bridges", "Todd", "Pratt", "Lucas", "Fuller", "Penny", "Lynda", "Richards", "Carol", "Robinson", "Lindsay", "Gertrude", "Angelica", "Christine", "Renee", "Nancy", "Kelly", "Marian", "Franklin", "Gray", "Haynes", "Delgado", "Leonard", "Annie", "Payne", "Hansen", "Watts", "Matthews", "Harper", "Donna", "Jimenez", "Mann", "Myra", "Vickie", "Ramos", "Shirley", "Wright", "Hall", "Faye", "Viola", "Agnes", "Marcia", "Billie", "Logan", "Reeves", "Sara", "Jordan", "Jensen", "Greer", "Margaret", "April", "Cruz", "Valdez", "Elaine", "Singleton", "Alvarez", "Stone", "Bowen", "Miller", "Bessie", "Sonia", "Butler", "Laurie", "Henderson", "Isabel", "Mcgee", "Kathy", "Carr", "Erin", "Mclaughlin", "Pena", "Hernandez", "Pamela", "Diana", "Alicia", "Moss", "Osborne", "Eileen", "Amber", "Malone", "Rhodes", "Jean", "Gloria", "Beverly", "Phyllis", "Mason", "Thelma", "Powell", "Marie", "Ford", "Gomez", "Lynch", "Robbins", "Tate", "Nora", "Olivia", "Krista", "Walsh", "Patsy", "Wong", "Gardner", "Sonya", "Violet", "Teresa", "Kelli", "Ballard", "Lillie", "Naomi", "Cohen", "Leticia", "Jan", "Monica", "Luz", "Georgia", "Peggy", "Dianne", "Grant", "Greene", "Anne", "Briggs", "Richardson", "Griffin", "Fisher", "Alma", "Adrienne", "Moreno", "Kristi", "Katherine", "Sheryl", "Cathy", "Roberta", "Morris", "Caroline", "Holloway", "Padilla", "Wolfe", "Natasha", "Marshall", "Colon", "Emma", "Terri", "Cora", "Potter", "Tucker", "Cole", "Helen", "Allison", "Sheila", "Jeannette", "Burton", "Barton", "Irene", "Bryant", "Bertha", "Antoinette", "Garza", "Pauline", "Julie", "Reynolds", "Margarita", "Simon", "Theresa", "Genevieve", "Thomas", "Wheeler", "Connie", "Walters", "Shelia", "Collier", "Harris", "Bush", "Melissa", "Willie", "Wanda", "Byrd", "Janice", "Hannah", "Santos", "Fannie", "Katrina", "Stevens", "Stephens", "Beulah", "Berry", "Melody", "Guzman", "Miles", "Tiffany", "Francis", "Angie", "Shelly", "Mcguire", "Jennifer", "Maryann", "Anderson", "Virginia", "Richard", "Glover", "Louise", "Walton", "Mcdaniel", "Meyer", "Sutton", "Ramirez", "Hudson", "Evans", "Kimberly", "Colleen", "Schneider", "Waters", "Jeanette", "Mendoza", "Flora", "Candice", "Katie", "Miriam", "Daniels", "Sandra", "Verna", "Arnold", "Della", "Dawson", "Misty", "Davidson", "Gail", "Gates", "Williamson", "Marquez", "Brooke", "Reese", "Diane", "Dixon", "Gonzales", "Dunn", "Cheryl", "Loretta", "Erica", "Geraldine", "Delores", "Melinda", "Constance", "Tracey", "Susie", "Heidi", "Weaver", "Kristine", "Carpenter", "Bennett", "Becky", "Moore", "Barbara", "Henry", "Suzanne", "Jenny", "Erickson", "Maldonado", "Morton", "Figueroa", "Barnett", "Oliver", "Wells", "Cox", "Bradley", "Michelle", "Darlene", "Deanna", "Hattie", "Mendez", "Goodwin", "Holly", "Maggie", "Ethel", "Grace", "Murray", "Douglas", "Cook", "Hilda", "Sandy", "Nellie", "Day", "Andrea", "Cross", "Abbott", "Veronica", "Ashley", "Roy", "Mills", "Frances", "Wade", "Claudia", "Minnie", "Joann", "Patterson", "Mary", "Benson", "Lyons", "Perkins", "Nunez", "Hopkins", "Rosemary", "Janie", "Gibbs", "Barrett", "Molly", "Mckenzie", "Wilson", "Sharon", "Cobb", "Armstrong", "Priscilla", "Regina", "Jodi", "Bernadette", "Reed", "Phillips", "Martinez", "Candace", "Myers", "Eunice", "Patricia", "Jessie", "Quinn", "Crystal", "Brady", "Snyder", "Mccarthy", "Riley", "Woods", "Saunders", "Sparks", "Kathleen", "Stewart", "Wagner", "Brenda", "Lloyd", "Lois", "Nash", "Dean", "Jill", "Moran", "Hunter", "Baldwin", "Vicki", "Watkins", "Cooper", "Carla", "Sally", "Megan", "Kayla", "Victoria", "Vasquez", "Rodriguez", "Perry", "Ingram", "Kristin", "Ana", "Reid", "Marjorie", "Lane", "Sims", "Ferguson", "Susan", "George", "Cecilia", "Hunt", "Linda", "Mattie", "Gibson", "Lewis", "Brittany", "Dennis", "Simpson", "Bates", "Drake", "Bobbie", "Schmidt", "Claire", "Margie", "Pope", "Erma", "Klein", "Courtney", "Rosa", "Guerrero", "Hammond", "Gwendolyn", "Chambers", "Nina", "Audrey", "Coleman", "Turner", "Tracy", "Adkins", "Alice", "Johnnie", "Park", "Leslie", "Karen", "Garrett", "Salazar", "Ruiz", "Ellis", "Kristina", "Estrada", "Collins", "Marion", "Castillo", "Swanson", "Howard", "Wilcox", "Watson", "Peterson", "Neal", "Laura", "Rodgers", "Tanya", "Harrington", "Lola", "Olga", "Hampton", "Jane", "Lorraine", "Maxine", "Herrera", "Lisa", "Joanne", "Boyd", "Kennedy", "Jennings", "Bryan", "Morgan", "Caldwell", "Mack", "Yates", "Eva", "Christensen", "Vivian", "Gladys", "Ella", "Campbell", "Ada", "Betty", "Ruby", "Nicole", "Chase", "Newton", "Bell", "Danielle", "Stephanie", "Banks", "Lynn", "Hill", "Griffith", "Mamie", "Brooks", "Gregory", "Florence", "Duncan", "Fletcher", "Valerie", "Adams", "Farmer", "Thornton", "Amelia", "Parks", "Hayes", "Owen", "Carmen", "Whitney", "Carrie", "May", "Stella", "Pittman", "Diaz", "Peters", "Floyd", "Higgins", "Paul", "Yvette", "Cochran", "Chapman", "Lindsey", "Parsons", "Houston", "Cynthia", "Goodman", "Rachel", "Marsha", "Bridget", "Sharp", "Amanda", "Vaughn", "Johnson", "Lena", "Stacey", "Hood", "Ross", "Hamilton", "Rosie", "Daniel", "Kim", "Hardy", "Esther", "Annette", "Janet", "Erika", "Hanson", "Charlotte", "Ramona", "Sadie", "Graves", "Wilkins", "Bishop", "Marianne", "Cassandra", "Debra", "Myrtle", "Opal", "Allen", "Tran", "Guadalupe", "Marlene", "Bowers", "Madeline", "Jeanne", "Amy", "Elizabeth", "Barber", "Ortega", "Belinda", "Sylvia", "Cain", "Carter", "Shaw", "Rowe", "Carroll", "Carolyn", "Lamb", "Cindy", "Rose", "Dawn", "Martha", "Brandi", "Edna", "Willis", "Norma", "Jacobs", "Clay", "Weber", "Fox", "Olson", "Lee", "Leah", "Mildred", "Fernandez", "Curry", "Nguyen", "Simmons", "Jackson", "Latoya", "Lucille", "Bailey", "Rosalie", "Alexander", "Dana", "Lawson", "Perez", "Maureen", "Sabrina", "Pam", "Owens", "Blanca", "Keller", "Stevenson", "Jones", "Wallace"];
    var a = (Math.random() * dnama.length) | 0;
    var b = (Math.random() * dnama.length) | 1;
    var f = (Math.random() * dnama.length) | 2;
    var nama = document.getElementsByName('firstname')[0];
    var att = document.createAttribute("value");
    att.value = dnama[a] + " " + dnama[f];
    nama.setAttributeNode(att);
    var nama = document.getElementsByName('lastname')[0];
    var att = document.createAttribute("value");
    att.value = dnama[b];
    nama.setAttributeNode(att);
    var day = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];
    var c = (Math.random() * day.length) | 0;
    var bulan = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var d = (Math.random() * bulan.length) | 0;
    var tahun = ["1996"];
    var e = (Math.random() * tahun.length) | 0;
    document.getElementById('day').value = day[c];
    document.getElementById('month').value = bulan[d];
    document.getElementById('year').value = tahun[e];
    document.getElementsByName('sex')[0].checked = true;
    var en = document.querySelector('input[name="reg_email__"]');
    en.value = "+33-323-" + Math.floor(100 + Math.random() * 900) + "" + +Math.floor(100 + Math.random() * 900);
    document.getElementById('password_step_input').value = 'TEORINGELID';
  	
  }
