package org.example.webflux.jwt;

import java.util.Set;

record ProfileResponse(String username, Set<String> roles) {
}
