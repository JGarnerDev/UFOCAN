import mysql.connector

with open('UFOCAN/data/Mysql_creds.json') as f:
    mysql_creds = json.load(f)

mydb = mysql.connector.connect(host=mysql_creds.get('host'),
                               user=mysql_creds.get('user'),
                               password=mysql_creds.get('pw'),
                               databse=mysql_creds.get('db'))

print(mydb)



# ---------------------------------- query

# mycursor = mydb.cursor()
# mycursor.execute("SELECT * FROM customers")
# myresult = mycursor.fetchall()

# for x in myresult:
#     print(x)
