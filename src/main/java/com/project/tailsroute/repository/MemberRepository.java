package com.project.tailsroute.repository;

import com.project.tailsroute.vo.Member;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface MemberRepository {

    @Select("SELECT * FROM `member` WHERE id = #{id}")
    public Member getMemberById(int id);

    @Select("""
			SELECT *
			FROM `member`
			WHERE loginId = #{loginId}
			""")
    public Member getMemberByLoginId(String loginId);

    @Insert("INSERT INTO `member` SET regDate = NOW(), updateDate = NOW(), loginId = #{loginId}, loginPw = #{loginPw}, `name` = #{name}, nickname = #{nickname}, cellphoneNum = #{cellphoneNum}, email = #{email}")
    public void doSignUp(String loginId, String loginPw, String name, String nickname, String cellphoneNum,
                         String email);

    @Select("SELECT LAST_INSERT_ID();")
    public int getLastInsertId();

}