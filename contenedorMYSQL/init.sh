docker run --name some-mysql4 \
-e MYSQL_ROOT_PASSWORD=123456789 \
-d mysql:0.1 \
--character-set-server=utf8mb4 \
--collation-server=utf8mb4_unicode_ci \
--default-authentication-plugin=mysql_native_password