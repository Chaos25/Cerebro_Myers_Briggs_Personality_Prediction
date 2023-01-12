create or replace NONEDITIONABLE PROCEDURE SETZEROES(idd in varchar2) as 
begin
  update d_update set p1=0 where pkk=idd;
  update d_update set p2=0 where pkk=idd;
  update d_update set p3=0 where pkk=idd;
  update d_update set p4=0 where pkk=idd;
  update d_update set p5=0 where pkk=idd;
  update d_update set p6=0 where pkk=idd;
  update d_update set p7=0 where pkk=idd;
  update d_update set p8=0 where pkk=idd;
  update percentage set ie=0 where username=idd;
  update percentage set sn=0 where username=idd;
  update percentage set tf=0 where username=idd;
  update percentage set jp=0 where username=idd;
  
  commit;
end;
