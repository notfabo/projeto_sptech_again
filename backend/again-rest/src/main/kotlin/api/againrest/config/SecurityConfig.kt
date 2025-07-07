package api.againrest.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

@Configuration
class WebConfig {

    @Bean
    fun corsFilter(): CorsFilter {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
        config.allowCredentials = true
        //config.allowedOrigins = listOf("http://54.89.247.26:3000") // Your frontend's domain
        config.allowedOrigins = listOf("http://localhost:3000") // Your frontend's domain
        config.allowedMethods = listOf("GET", "POST", "PUT", "DELETE", "OPTIONS")
        config.allowedHeaders = listOf("*")
        config.exposedHeaders = listOf("Authorization", "Content-Type")
        source.registerCorsConfiguration("/**", config)
        return CorsFilter(source)
    }
}