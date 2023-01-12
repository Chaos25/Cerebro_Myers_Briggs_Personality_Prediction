create or replace NONEDITIONABLE procedure update_score(idd in number, choice in number, username in varchar2) as
            ch_id questions.char_id%type;
            prev_pts d_update.p1%type;
            column_name varchar(5);
            oneortwo d_optionid.col_no%type;
            pt d_optionid.pts%type;
            total number;
            execstat2 varchar2(100);

        BEGIN
                select char_id into ch_id from questions where q_id=idd;
                select pts into pt from d_optionid where opt_id=choice;
                select col_no into oneortwo from d_optionid where opt_id=choice;
                if ch_id=1 then
                    if oneortwo=1 then
                    column_name:='p1';
                    else
                    column_name:='p2';
                    end if;
                elsif ch_id=2 then
                    if oneortwo=1 then
                    column_name:='p2';
                    else
                    column_name:='p1';
                    end if;
                elsif ch_id=3 then
                    if oneortwo=1 then
                    column_name:='p3';
                    else
                    column_name:='p4';
                    end if;
                elsif ch_id=4 then
                    if oneortwo=1 then
                    column_name:='p4';
                    else
                    column_name:='p3';
                    end if;
                elsif ch_id=5 then
                    if oneortwo=1 then
                    column_name:='p5';
                    else
                    column_name:='p6';
                    end if;
                elsif ch_id=6 then
                    if oneortwo=1 then
                    column_name:='p6';
                    else
                    column_name:='p5';
                    end if;
                elsif ch_id=7 then
                    if oneortwo=1 then
                    column_name:='p7';
                    else
                    column_name:='p8';
                    end if;
                elsif ch_id=8 then
                    if oneortwo=1 then
                    column_name:='p8';
                    else
                    column_name:='p7';
                    end if;
                else
                    column_name:='not_found';
            end if;
            /*execstat1:='update d_update set '|| column_name ||' =  where pkk =1';*/
            execute immediate 'select '||column_name||' from d_update where pkk=:username 'into prev_pts using username;
            commit;
            total:=prev_pts+pt;
            execute immediate 'update d_update set '||column_name||'=:total where pkk=:username' using total,username;
            commit;
end;
