package com.lentech.weixin.miniapp.common.utils.weixin;
import java.nio.charset.StandardCharsets;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.Signature;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;

import javax.crypto.Cipher;


public class RealnameinfoUtils {

	 public static final String ENCODING_UTF_8 = "UTF-8";
	 public static final String ENCODING_GBK = "GBK";  
	 public static final String SIGNATURE_ALGORITHM = "SHA256withRSA";  
	 public static final String SIGN_TYPE_RSA="RSA";
	 public static KeyPair generateKeyPair() throws Exception {
			KeyPairGenerator generator = KeyPairGenerator.getInstance(SIGN_TYPE_RSA);
			generator.initialize(2048, new SecureRandom());
			KeyPair pair = generator.generateKeyPair();
			return pair;
		}
		
		public static PublicKey generatePublicKey(String keyStr) throws Exception {
			String realKeySpec = keyStr
					.replaceAll("-----BEGIN PUBLIC KEY-----", "")
					.replaceAll("-----END PUBLIC KEY-----", "")
					.replaceAll("\n", "");
			byte[] keyBytes = Base64.getDecoder().decode(realKeySpec);
			PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
			KeyFactory factory = KeyFactory.getInstance(SIGN_TYPE_RSA);
			return factory.generatePublic(keySpec);
		}
		
		public static PrivateKey generatePrivateKey(String keyStr) throws Exception {
			String realKeySpec = keyStr
					.replaceAll("-----BEGIN PRIVATE KEY-----", "")
					.replaceAll("-----END PRIVATE KEY-----", "")
					.replaceAll("\n", "");
			byte[] keyBytes = Base64.getDecoder().decode(realKeySpec);
			PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
			KeyFactory factory = KeyFactory.getInstance(SIGN_TYPE_RSA);
			return factory.generatePrivate(keySpec);
		}

		public static String encrypt(String plainText, PublicKey publicKey) throws Exception {
			Cipher encryptCipher = Cipher.getInstance(SIGN_TYPE_RSA);
			encryptCipher.init(Cipher.ENCRYPT_MODE, publicKey);
			byte[] cipherText = encryptCipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));
			return Base64.getEncoder().encodeToString(cipherText);
		}

		public static String decrypt(String cipherText, PrivateKey privateKey) throws Exception {
			byte[] bytes = Base64.getDecoder().decode(cipherText);
			Cipher decriptCipher = Cipher.getInstance(SIGN_TYPE_RSA);
			decriptCipher.init(Cipher.DECRYPT_MODE, privateKey);
			return new String(decriptCipher.doFinal(bytes), StandardCharsets.UTF_8);
		}
		
		public static String decrypt(String cipherText, PrivateKey privateKey, String charset) throws Exception {
			byte[] bytes = Base64.getDecoder().decode(cipherText);
			Cipher decriptCipher = Cipher.getInstance(SIGN_TYPE_RSA);
			decriptCipher.init(Cipher.DECRYPT_MODE, privateKey);
			return new String(decriptCipher.doFinal(bytes), charset);
		}
		public static String decrypt(String cipherText, String privateKeyStr, String charset) throws Exception {
			PrivateKey privateKey = generatePrivateKey(privateKeyStr);
			byte[] bytes = Base64.getDecoder().decode(cipherText);
			Cipher decriptCipher = Cipher.getInstance(SIGN_TYPE_RSA);
			decriptCipher.init(Cipher.DECRYPT_MODE, privateKey);
			return new String(decriptCipher.doFinal(bytes), charset);
		}
		public static String sign(String plainText, PrivateKey privateKey) throws Exception {
			Signature privateSignature = Signature.getInstance(SIGNATURE_ALGORITHM);
			privateSignature.initSign(privateKey);
			privateSignature.update(plainText.getBytes(StandardCharsets.UTF_8));
			byte[] signature = privateSignature.sign();
			return Base64.getEncoder().encodeToString(signature);
		}
		public static String sign(String plainText, String privateKeyStr) throws Exception {
			PrivateKey privateKey = generatePrivateKey(privateKeyStr);
			Signature privateSignature = Signature.getInstance(SIGNATURE_ALGORITHM);
			privateSignature.initSign(privateKey);
			privateSignature.update(plainText.getBytes(StandardCharsets.UTF_8));
			byte[] signature = privateSignature.sign();
			return Base64.getEncoder().encodeToString(signature);
		}
		public static boolean verify(String plainText, String signature, PublicKey publicKey) throws Exception {
			Signature publicSignature = Signature.getInstance(SIGNATURE_ALGORITHM);
			publicSignature.initVerify(publicKey);
			publicSignature.update(plainText.getBytes(StandardCharsets.UTF_8));
			byte[] signatureBytes = Base64.getDecoder().decode(signature);
			return publicSignature.verify(signatureBytes);
		}
    /***
     *  以秒为最小单位的 unix 时间戳，必须获取当前时间
     * getTimestamp
     * @return
     */
    public static long getTimestamp() {
    	return System.currentTimeMillis()/1000;
    }
	public static void main(String[] args) throws Exception {
		PrivateKey privateKey = generatePrivateKey("");
		
		long time = System.currentTimeMillis() / 1000;
		System.out.println("time:" + time);
		String plainText = "cert_serialno=6A9BE50E7B27940DCEB845D1E4FFF53D42018D46&timestamp=" + time;
		String base64Signature = sign(plainText, privateKey);
		System.out.println("Signature=" + base64Signature);
		
		String cipherText1 = "qme3wyu5ZH1HOJlQqfIPPfRaU6vuQ3j629xM0+ctIj4rJycCwX4TZkuHVy9GiFWT4K25+X2ojCblebzIWsujPXklZw6njAsHuSipVwy6vk5f15AZTK3WfYvlHYC0o64f5R1RA98aFF57qCosArK1YnK267xsbtylRjK1IMp3izOKe4kU48BXCf9Mh80Di8DUi3wWJgotE7zn+dXSkMpCdzMZrDjPGrjIlDQdlI0iLrzQBUm6w45Jbbr0Zo9ycmGJFzyQlNYtrNlSgu9zQAArDAXrl+h/oN2EZJWG6UGSIogKNNkIdzJQIdKBzqhFDMpybWes2cyQUAQjIN01Iymmxw==";
		String userName = decrypt(cipherText1, privateKey, "GBK");
		System.out.println("userName:" + userName);
		
		String cipherText2 = "hxZOZgzWjSktsyBUNFvQl9MpFD9xA2UdWN8U+eoRmsNAh+bC1DIpSOA0Xyli5/Dstbmkgmzq0ZnAuy2FPg4dXXDlt0p0rPaIfjSOAo9GzyFI+IesG5vLGZfLtu41+iXEkRYq56Fkemvul129GajMGcwXJ/sP9tAg1Tr5aygtenfXaGcwzJzTimSN3vTH86EYZfvleLfMCuKVVZlQM76Oq4zHswYCTRr9k+ChuWUA42r1XvYC+CvZPPNX11x+Xq4mKsBL3atxhjujBab40JDAB4R2GjR5hq12J1Wf538mQ7aNYY65cu2tf3CR+KyEGEArJm4RDFaE7rxlZW9Wh3IUMw==";
		String idCard = decrypt(cipherText2, privateKey, "UTF-8");
		System.out.println("idCard:" + idCard);
	}
}
