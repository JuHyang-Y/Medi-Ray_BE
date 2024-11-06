package com.example.MR.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // CSRF 비활성화 (필요한 경우 활성화)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/**").permitAll() // public 경로 허용
//                .requestMatchers("/public/**").permitAll() // public 경로 허용
                .anyRequest().authenticated() // 다른 요청은 인증 필요
            )
            .formLogin(login -> login // 폼 로그인 활성화
                .loginPage("/login") // 로그인 페이지 경로
                .permitAll()
            )
            .logout(logout -> logout // 로그아웃 설정
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login?logout")
            );

        return http.build();
    }
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        var user = User.withUsername("user")
//            .password("{noop}password") // 비밀번호 암호화 사용 안 함 (noop)
//            .roles("USER")
//            .build();
//        return new InMemoryUserDetailsManager(user);
//    }
}
