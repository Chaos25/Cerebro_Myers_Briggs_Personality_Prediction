create or replace NONEDITIONABLE PROCEDURE PERC_CALC(idd varchar2) AS
    i_score number;
    e_score number;
    s_score number;
    n_score number;
    t_score number;
    f_score number;
    j_score number;
    p_score number;
    i_perc percentage.ie%type;
    e_perc percentage.ie%type;
    s_perc percentage.sn%type;
    n_perc percentage.sn%type;
    t_perc percentage.tf%type;
    f_perc percentage.tf%type;
    j_perc percentage.jp%type;
    p_perc percentage.jp%type;
    
    
BEGIN
  select p1,p2,p3,p4,p5,p6,p7,p8 into i_score,e_score,s_score,n_score,t_score,f_score,j_score,p_score from d_update where pkk=idd;
  i_perc:= round((i_score/14)*100);
  s_perc:= round((s_score/14)*100);
  t_perc:= round((t_score/14)*100);
  j_perc:= round((j_score/14)*100);
  
  update percentage set ie=i_perc where username=idd;
  update percentage set sn=s_perc where username=idd;
  update percentage set tf=t_perc where username=idd;
  update percentage set jp=j_perc where username=idd;
  commit;
  
  
END;
