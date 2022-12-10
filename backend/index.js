const express = require('express');
const app = express();
const oracledb = require('oracledb');
const cors = require('cors');
const { json } = require('express');
const PORT = 3002;

app.use(express.json());
app.use(cors());


global.connect = async function connect() {
    try {
        const connection = await oracledb.getConnection(
            {
                user: 'tg',
                password: '123',
                connectionString: 'localhost/ORCL',

            }
        )
        return connection;
    }
    catch (error) {
        return error;
    }
}

app.post('/register', cors(), async (req, res) => {

    const user = req.body.username
    const pass = req.body.password
    const nam= req.body.namee
    const ag= req.body.agee
    const gen= req.body.genderr
    console.log(nam+","+user+","+pass)
    async function InsertData() {
        var retinsert;
        try {
            const result = connection.execute("select * from f_person where username= :0", [user]);
            connection.commit();
            if ((await result).rows.length == 0) {
                connection.execute("insert into f_person values" + "(:0,:1,:2,:3,:4)", [nam,user,ag,gen,pass]);
                await connection.execute("insert into d_update values(:0,0,0,0,0,0,0,0,0)", [user]);
                await connection.execute("insert into percentage values(:0,0,0,0,0)", [user]);
                connection.commit();
                retinsert = { username: user, password: pass };
            }
            else {

                retinsert = { username: 0 };
            }
            return retinsert;
        }
        catch (error) {
            return error;
        }
    }

    await connect().then((connec) => {
        global.connection = connec;
    })
        .catch((err) => {
            console.log(err)
        })
    await InsertData().then((retinsert) => {
        res.send(retinsert);
        //res.send('Done!')
    }).catch((err) => {
        res.send(err);
    })


})

app.post('/login', async (req, res) => {

    const user = req.body.username
    const pass = req.body.password
    console.log(user, ",", pass)

    async function FetchData() {
        try {

            const result = connection.execute("select * from f_person where username= :0 and password= :1", [user, pass]);
            connection.commit();
            if ((await result).rows.length == 0) {
                console.log('No record exists!');
            }
            else {
                console.log('Fetched data: ', (await result).rows)

            }
            return result;
        }
        catch (error) {
            return error;
        }
    }

    await connect().then((connec) => {
        global.connection = connec;
    })
        .then((err) => {
            //console.log(err)
        })

    await FetchData().then((result) => {
        res.send(result);
    }).then((err) => {
        //console.log(err);
    })


})
app.post('/choice', async (req, res) => {
    //choices_array = req.body.c;
    //usernam= req.body.u;
    choices_array= req.body
    usernam= choices_array[0].choice
    console.log(choices_array);
    console.log(usernam)
    const suc = 'hii';
    const len = choices_array.length;
    async function UpdatePts() {
        try {
            for (var i = 1; i < 15; i++) {

                connection.execute(
                    'CALL update_score(:idd, :optt, :username)',
                    {
                        idd: choices_array[i].id,
                        optt: choices_array[i].choice,
                        username: usernam
                    });
                connection.commit();
            }
            return suc;

        }
        catch (err) {

            return err;
        }
    }
    await connect().then((connec) => {
        global.connection = connec;
    })
        .catch((err) => {
            console.log(err)
        })
    await UpdatePts().then((retinsert) => {
        res.send(retinsert);
        //res.send('Done!')
    }).catch((err) => {
        res.send(err);
    })
   

})
app.post('/qp1', cors(), async (req, res) => {
    const number = req.body.num
    const userna= req.body.u;
    console.log('username '+userna)
    const lessgo='lessgo'
    async function makezero() {
        try {
             connection.execute(
                `CALL SETZEROES(:username)`,
                {
                    username: userna
                });
            connection.commit();
            return lessgo;
        }
        catch (err) {
            return err;
        }
    }
    async function showqs(num) {
        try {
            const startnum = 1 + (num - 1) * 15;
            const endnum = (num * 15) + 1;
            //const endnum=startnum+4;
            const result = connection.execute(`select q_id,question from questions where q_id>=:0 and q_id< :1`, [startnum, endnum]);
            connection.commit();
            return result;
        }
        catch (error) {
            return error;
        }
    }
    await connect().then((connec) => {
        global.connection = connec;
    })
        .then((err) => {
            console.log(err)
        })

    await makezero().then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    })

    await showqs(number).then((result) => {
        //console.log(result.rows);
        var retarr = result.rows.map(x => ({
            id: x[0],
            question: x[1]
        }));
        //console.log(retarr);
        res.send(retarr);


    }).then((err) => {
        //console.log(err);
    })
})

app.post('/qp', cors(), async (req, res) => {
    const number = req.body.num;
    async function showqs(num) {
        try {
            const startnum = 1 + (num - 1) * 15;
            const endnum = (num * 15) + 1;
            //const endnum=startnum+4;
            const result = connection.execute(`select q_id,question from questions where q_id>=:0 and q_id< :1`, [startnum, endnum]);
            connection.commit();
            return result;
        }
        catch (error) {
            return error;
        }
    }
    await connect().then((connec) => {
        global.connection = connec;
    })
        .then((err) => {
            console.log(err)
        })

    await showqs(number).then((result) => {
        //console.log(result.rows);
        var retarr = result.rows.map(x => ({
            id: x[0],
            question: x[1]
        }));
        //console.log(retarr);
        res.send(retarr);


    }).then((err) => {
        //console.log(err);
    })
})
app.post('/Result', cors(), async (req, res) => {

    const usern = req.body.u;
    console.log('userna'+usern)
    async function perc()
    {
        try{
        const lessgo= 'lessgo'
        await connection.execute(
            'CALL perc_calc(:username)',
            {
                username: usern
            });
            connection.commit();
            return lessgo;
        }
        catch(err)
        {
            return err;
        }
    }


    async function exportMe() {
        try {
            const arr=[]
            const final_result = await connection.execute('select ie,sn,tf,jp from percentage where username=:0', [usern])
            const getname= await connection.execute('select name from f_person where username=:0',[usern])
            console.log('myname '+getname.rows[0])
            connection.commit();
            if(final_result.rows[0][0]==0 && final_result.rows[0][1]==0 && final_result.rows[0][2]==0 && final_result.rows[0][3]==0)
            {
                arr.push('If you are a ');
                arr.push(0);
                arr.push('Introverted');
                arr.push('new user, please ');
                arr.push(0);
                arr.push('Observant');
                arr.push('take the test first');
                arr.push(0);
                arr.push('Thinking');
                arr.push(':)');
                arr.push(0);
                arr.push('Judging');
                arr.push(getname.rows[0][0])
                arr.push()
                

            }

            else{
            if(final_result.rows[0][0]<50)
            {
                arr.push('E');
                final_result.rows[0][0]=100-final_result.rows[0][0];
                arr.push(final_result.rows[0][0])
                arr.push('Extroverted')
            }
            else{
                arr.push('I');
                arr.push(final_result.rows[0][0])
                arr.push('Introverted')
            }

            if(final_result.rows[0][1]<50)
            {
                arr.push('N');
                final_result.rows[0][1]=100-final_result.rows[0][1];
                arr.push(final_result.rows[0][1])
                arr.push('Intuitive')
            }
            else{
                arr.push('S');
                arr.push(final_result.rows[0][1])
                arr.push('Observant')
            }
            if(final_result.rows[0][2]<50)
            {
                arr.push('T');
                final_result.rows[0][2]=100-final_result.rows[0][2];
                arr.push(final_result.rows[0][2])
                arr.push('Thinking')
            }
            else{
                arr.push('F');
                arr.push(final_result.rows[0][2])
                arr.push('Feeling')
            }

            if(final_result.rows[0][3]<50)
            {
                arr.push('P');
                final_result.rows[0][0]=100-final_result.rows[0][3];
                arr.push(final_result.rows[0][3])
                arr.push('Perspective')
                arr.push(getname.rows[0][0])
                arr.push('You are a ')
            }
            else{
                arr.push('J');
                arr.push(final_result.rows[0][3])
                arr.push('Judging')
                arr.push(getname.rows[0][0])
                arr.push('You are a ')
            }
        }

            return arr;
            }
        
        catch (err) {
            return err;
        }

    }
    async function percc()
    {
        var percent;
        try{
            percent= await connection.execute(
                'CALL calculate_perc(:username)',
                {
                    username: usern
                });
                connection.commit();
                return percent;
            }
            catch(err)
            {
                return err;
            }
        }

    await connect().then((connec) => {
        global.connection = connec;
    })
        .then((err) => {
            console.log(err)
        })

    await perc().then((rr)=>{
            console.log(rr);
        }).catch((err)=>{
            console.log(err);
        })

    await exportMe().then((responsee) => {
        const var1 = responsee;

        console.log(var1)
        res.send(var1);
    }).catch((err) => {
        res.send(err);
    })

})

app.listen(3002, () => {
    console.log(`listen to port ${PORT}`);
})
