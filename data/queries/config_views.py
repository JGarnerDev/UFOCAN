from sqlalchemy import create_engine
import json

with open('Mysql_creds.json') as f:
    mysql_creds = json.load(f)

    engine = create_engine(
        'mysql+pymysql://{user}:{pw}@us-cdbr-east-05.cleardb.net:3306/{db}'.
        format(user=mysql_creds['user'],
               pw=mysql_creds['pw'],
               db=mysql_creds['db']))

with open('queries/views/views.sql') as f:
    sql = f.read()

test = engine.execute(sql)

for _r in test:
    print(_r)
