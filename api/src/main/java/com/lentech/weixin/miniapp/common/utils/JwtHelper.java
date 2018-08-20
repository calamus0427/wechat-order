package com.lentech.weixin.miniapp.common.utils;

import java.security.Key;
import java.util.Date;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import com.lentech.weixin.miniapp.bean.model.WxUser;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtHelper {

    /**
     * 解析jwt
     */
    public static Claims parseJWT(String jsonWebToken, String base64Security){
        try
        {
            Claims claims = Jwts.parser()
                    .setSigningKey(DatatypeConverter.parseBase64Binary(base64Security))
                    .parseClaimsJws(jsonWebToken).getBody();
            return claims;
            
        }
        catch(Exception ex)
        {
            return null;
        }
    }
    /**
     * 直接转换成微信登录信息
     * @param jsonWebToken
     * @param base64Security
     * @return
     */
    public static WxUser parseJWTWxMaJscode2SessionResult(String jsonWebToken, String base64Security){
        try
        {
            Claims claims = Jwts.parser()
                    .setSigningKey(DatatypeConverter.parseBase64Binary(base64Security))
                    .parseClaimsJws(jsonWebToken).getBody();
            WxUser wxUser=WxUser.builder()
            		.openid((String) claims.get("openid"))
            		.sessionKey((String) claims.get("sessionKey"))
            		.unionid((String) claims.get("unionid"))
            		.build();          
            return wxUser;            
        }
        catch(Exception ex)
        {
            return null;
        }
    }
    /**
     * 构建jwt
     */
    public static String createJWT(String openid, String unionid, String sessionKey,
                                   String audience, String issuer, long TTLMillis, String base64Security)
    {
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);

        //生成签名密钥
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(base64Security);
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
        //添加构成JWT的参数
        JwtBuilder builder = Jwts.builder().setHeaderParam("typ", "JWT")
                .claim("openid", openid)
                .claim("unionid", unionid)
                .claim("sessionKey", sessionKey)
                .setIssuer(issuer)
                .setAudience(audience)
                .signWith(signatureAlgorithm, signingKey);
        //添加Token过期时间
        if (TTLMillis >= 0) {
            long expMillis = nowMillis + TTLMillis;
            Date exp = new Date(expMillis);
            builder.setExpiration(exp).setNotBefore(now);
        }

        //生成JWT
        return builder.compact();
    }

}