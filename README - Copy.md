# FullStack

鉴于市面上CMS都已陈旧的情况，作者用更先进的laravel和ant-design重新设计、架构新时代的CMS。开源不易，请尊重版权！ 

## 安装说明

首先需要将web环境的默认目录指向public目录

命令行安装系统

重命名.env.example 改为 .env 

编辑.env文件，配置数据库信息

运行 composer install 安装依赖库

命令行下执行数据迁移

第一步：php artisan migrate(您需要将php加入到环境变量)

第二步：php artisan db:seed(注意: 如果在执行迁移时发生「class not found」错误，试着先执行 composer dump-autoload 命令后再进行一次。)

第三步：php artisan key:generate && php artisan passport:install && php artisan storage:link

第四步：php -S 127.0.0.1:8080 -t ./public

第五步：http://127.0.0.1:8080/admin


默认用户名：administrator 密码：123456

## 官方支持

github地址:https://github.com/tangtanglove/fullstack

## 演示地址

http://fullstack.qasl.cn/admin/

默认用户名：administrator 密码：123456



1 composer install

C:\Users\tlzs\github_cms\fullstack-backend>composer install
Loading composer repositories with package information
Installing dependencies (including require-dev) from lock file
Package operations: 137 installs, 0 updates, 0 removals
  - Installing easywechat-composer/easywechat-composer (1.2.0): Downloading (100%)
  - Installing aliyuncs/oss-sdk-php (v2.3.0): Downloading (100%)
  - Installing league/flysystem (1.0.56): Downloading (100%)
  - Installing anam/phantommagick (v2.0.0): Downloading (100%)
  - Installing symfony/polyfill-ctype (v1.12.0): Downloading (100%)
  - Installing phpoption/phpoption (1.5.0): Downloading (100%)
  - Installing vlucas/phpdotenv (v3.6.0): Downloading (100%)
  - Installing symfony/css-selector (v4.3.5): Downloading (100%)
  - Installing tijsverkoyen/css-to-inline-styles (2.2.1): Downloading (100%)
  - Installing symfony/polyfill-php72 (v1.12.0): Downloading (100%)
  - Installing symfony/polyfill-mbstring (v1.12.0): Downloading (100%)
  - Installing symfony/var-dumper (v4.3.5): Downloading (100%)
  - Installing symfony/routing (v4.3.5): Downloading (100%)
  - Installing symfony/process (v4.3.5): Downloading (100%)
  - Installing symfony/polyfill-php73 (v1.12.0): Downloading (100%)
  - Installing symfony/polyfill-intl-idn (v1.12.0): Downloading (100%)
  - Installing symfony/mime (v4.3.5): Downloading (100%)
  - Installing symfony/http-foundation (v4.3.5): Downloading (100%)
  - Installing symfony/event-dispatcher-contracts (v1.1.7): Downloading (100%)
  - Installing symfony/event-dispatcher (v4.3.5): Downloading (100%)
  - Installing psr/log (1.1.0): Downloading (100%)
  - Installing symfony/debug (v4.3.5): Downloading (100%)
  - Installing symfony/http-kernel (v4.3.5): Downloading (100%)
  - Installing symfony/finder (v4.3.5): Downloading (100%)
  - Installing psr/container (1.0.0): Downloading (100%)
  - Installing symfony/service-contracts (v1.1.7): Downloading (100%)
  - Installing symfony/console (v4.3.5): Downloading (100%)
  - Installing symfony/polyfill-iconv (v1.12.0): Downloading (100%)
  - Installing doctrine/lexer (1.1.0): Downloading (100%)
  - Installing egulias/email-validator (2.1.11): Downloading (100%)
  - Installing swiftmailer/swiftmailer (v6.2.1): Downloading (100%)
  - Installing paragonie/random_compat (v9.99.99): Downloading (100%)
  - Installing ramsey/uuid (3.8.0): Downloading (100%)
  - Installing psr/simple-cache (1.0.1): Downloading (100%)
  - Installing opis/closure (3.4.0): Downloading (100%)
  - Installing symfony/translation-contracts (v1.1.7): Downloading (100%)
  - Installing symfony/translation (v4.3.5): Downloading (100%)
  - Installing nesbot/carbon (2.25.2): Downloading (100%)
  - Installing monolog/monolog (2.0.0): Downloading (100%)
  - Installing erusev/parsedown (1.7.3): Downloading (100%)
  - Installing dragonmantank/cron-expression (v2.3.0): Downloading (100%)
  - Installing doctrine/inflector (v1.3.0): Downloading (100%)
  - Installing laravel/framework (v6.3.0): Downloading (100%)
  - Installing caffeinated/modules (v6.1.0): Downloading (100%)
  - Installing symfony/property-access (v2.8.50): Downloading (100%)
  - Installing symfony/options-resolver (v2.8.50): Downloading (100%)
  - Installing myclabs/php-enum (1.7.2): Downloading (100%)
  - Installing khanamiryan/qrcode-detector-decoder (1): Downloading (100%)
  - Installing bacon/bacon-qr-code (1.0.3): Downloading (100%)
  - Installing endroid/qrcode (2.5.1): Downloading (100%)
  - Installing fideloper/proxy (4.2.1): Downloading (100%)
  - Installing gregwar/captcha (v1.1.7): Downloading (100%)
  - Installing guzzlehttp/promises (v1.3.1): Downloading (100%)
  - Installing ralouphie/getallheaders (3.0.3): Downloading (100%)
  - Installing psr/http-message (1.0.1): Downloading (100%)
  - Installing guzzlehttp/psr7 (1.6.1): Downloading (100%)
  - Installing intervention/image (2.5.0): Downloading (100%)
  - Installing jakub-onderka/php-console-color (v0.2): Downloading (100%)
  - Installing psr/http-factory (1.0.1): Downloading (100%)
  - Installing zendframework/zend-diactoros (2.1.5): Downloading (100%)
  - Installing symfony/psr-http-message-bridge (v1.2.0): Downloading (100%)
  - Installing phpseclib/phpseclib (2.0.23): Downloading (100%)
  - Installing league/event (2.2.0): Downloading (100%)
  - Installing lcobucci/jwt (3.3.1): Downloading (100%)
  - Installing defuse/php-encryption (v2.2.1): Downloading (100%)
  - Installing league/oauth2-server (7.4.0): Downloading (100%)
  - Installing guzzlehttp/guzzle (6.3.3): Downloading (100%)
  - Installing firebase/php-jwt (v5.0.0): Downloading (100%)
  - Installing laravel/passport (v7.5.1): Downloading (100%)
  - Installing nikic/php-parser (v4.2.4): Downloading (100%)
  - Installing jakub-onderka/php-console-highlighter (v0.4): Downloading (100%)
  - Installing dnoegel/php-xdg-base-dir (0.1): Downloading (100%)
  - Installing psy/psysh (v0.9.9): Downloading (100%)
  - Installing laravel/tinker (v1.0.10): Downloading (100%)
  - Installing psr/http-client (1.0.0): Downloading (100%)
  - Installing php-http/promise (v1.0.0): Downloading (100%)
  - Installing php-http/httplug (v2.0.0): Downloading (100%)
  - Installing php-http/guzzle6-adapter (v2.0.1): Downloading (100%)
  - Installing php-http/message-factory (v1.0.2): Downloading (100%)
  - Installing clue/stream-filter (v1.4.1): Downloading (100%)
  - Installing php-http/message (1.8.0): Downloading (100%)
  - Installing php-http/discovery (1.7.0): Downloading (100%)
  - Installing moneyphp/money (v3.2.1): Downloading (100%)
  - Installing omnipay/common (v3.0.2): Downloading (100%)
  - Installing lokielse/omnipay-alipay (v3.0.6): Downloading (100%)
  - Installing markbaker/matrix (1.2.0): Downloading (100%)
  - Installing markbaker/complex (1.4.7): Downloading (100%)
  - Installing phpoffice/phpspreadsheet (1.9.0): Downloading (100%)
  - Installing maatwebsite/excel (3.1.17): Downloading (100%)
  - Installing overtrue/easy-sms (1.1.18): Downloading (100%)
  - Installing overtrue/pinyin (4.0.5): Downloading (100%)
  - Installing symfony/var-exporter (v4.3.5): Downloading (100%)
  - Installing psr/cache (1.0.1): Downloading (100%)
  - Installing symfony/cache-contracts (v1.1.7): Downloading (100%)
  - Installing symfony/cache (v4.3.5): Downloading (100%)
  - Installing pimple/pimple (v3.2.3): Downloading (100%)
  - Installing overtrue/socialite (2.0.11): Downloading (100%)
  - Installing overtrue/wechat (4.2.6): Downloading (100%)
  - Installing spatie/laravel-permission (3.0): Downloading (100%)
  - Installing topthink/think-image (v1.0.7): Downloading (100%)
  - Installing scrivo/highlight.php (v9.15.10.0): Downloading (100%)
  - Installing filp/whoops (2.5.0): Downloading (100%)
  - Installing facade/ignition-contracts (1.0.0): Downloading (100%)
  - Installing facade/flare-client-php (1.1.1): Downloading (100%)
  - Installing facade/ignition (1.11.2): Downloading (100%)
  - Installing fzaninotto/faker (v1.8.0): Downloading (100%)
  - Installing hamcrest/hamcrest-php (v2.0.0): Downloading (100%)
  - Installing mockery/mockery (1.2.4): Downloading (100%)
  - Installing nunomaduro/collision (v3.0.1): Downloading (100%)
  - Installing webmozart/assert (1.5.0): Downloading (100%)
  - Installing phpdocumentor/reflection-common (2.0.0): Downloading (100%)
  - Installing phpdocumentor/type-resolver (1.0.1): Downloading (100%)
  - Installing phpdocumentor/reflection-docblock (4.3.2): Downloading (100%)
  - Installing phpunit/php-token-stream (3.1.1): Downloading (100%)
  - Installing sebastian/version (2.0.1): Downloading (100%)
  - Installing sebastian/type (1.1.3): Downloading (100%)
  - Installing sebastian/resource-operations (2.0.1): Downloading (100%)
  - Installing sebastian/recursion-context (3.0.0): Downloading (100%)
  - Installing sebastian/object-reflector (1.1.1): Downloading (100%)
  - Installing sebastian/object-enumerator (3.0.3): Downloading (100%)
  - Installing sebastian/global-state (3.0.0): Downloading (100%)
  - Installing sebastian/exporter (3.1.2): Downloading (100%)
  - Installing sebastian/environment (4.2.2): Downloading (100%)
  - Installing sebastian/diff (3.0.2): Downloading (100%)
  - Installing sebastian/comparator (3.0.2): Downloading (100%)
  - Installing phpunit/php-timer (2.1.2): Downloading (100%)
  - Installing phpunit/php-text-template (1.2.1): Downloading (100%)
  - Installing phpunit/php-file-iterator (2.0.2): Downloading (100%)
  - Installing theseer/tokenizer (1.1.3): Downloading (100%)
  - Installing sebastian/code-unit-reverse-lookup (1.0.1): Downloading (100%)
  - Installing phpunit/php-code-coverage (7.0.8): Downloading (100%)
  - Installing doctrine/instantiator (1.2.0): Downloading (100%)
  - Installing phpspec/prophecy (1.9.0): Downloading (100%)
  - Installing phar-io/version (2.0.1): Downloading (100%)
  - Installing phar-io/manifest (1.0.3): Downloading (100%)
  - Installing myclabs/deep-copy (1.9.3): Downloading (100%)
  - Installing phpunit/phpunit (8.4.1): Downloading (100%)
league/flysystem suggests installing ext-ftp (Allows you to use FTP server storage)
league/flysystem suggests installing league/flysystem-aws-s3-v2 (Allows you to use S3 storage with AWS SDK v2)
league/flysystem suggests installing league/flysystem-aws-s3-v3 (Allows you to use S3 storage with AWS SDK v3)
league/flysystem suggests installing league/flysystem-azure (Allows you to use Windows Azure Blob storage)
league/flysystem suggests installing league/flysystem-cached-adapter (Flysystem adapter decorator for metadata caching)
league/flysystem suggests installing league/flysystem-eventable-filesystem (Allows you to use EventableFilesystem)
league/flysystem suggests installing league/flysystem-rackspace (Allows you to use Rackspace Cloud Files)
league/flysystem suggests installing league/flysystem-sftp (Allows you to use SFTP server storage via phpseclib)
league/flysystem suggests installing league/flysystem-webdav (Allows you to use WebDAV storage)
league/flysystem suggests installing league/flysystem-ziparchive (Allows you to use ZipArchive adapter)
league/flysystem suggests installing spatie/flysystem-dropbox (Allows you to use Dropbox storage)
league/flysystem suggests installing srmklive/flysystem-dropbox-v2 (Allows you to use Dropbox storage for PHP 5 applications)
symfony/var-dumper suggests installing ext-intl (To show region name in time zone dump)
symfony/routing suggests installing doctrine/annotations (For using the annotation loader)
symfony/routing suggests installing symfony/config (For using the all-in-one router or any loader)
symfony/routing suggests installing symfony/expression-language (For using expression matching)
symfony/routing suggests installing symfony/yaml (For using the YAML loader)
symfony/polyfill-intl-idn suggests installing ext-intl (For best performance)
symfony/event-dispatcher-contracts suggests installing psr/event-dispatcher
symfony/event-dispatcher suggests installing symfony/dependency-injection
symfony/http-kernel suggests installing symfony/browser-kit
symfony/http-kernel suggests installing symfony/config
symfony/http-kernel suggests installing symfony/dependency-injection
symfony/service-contracts suggests installing symfony/service-implementation
symfony/console suggests installing symfony/lock
egulias/email-validator suggests installing ext-intl (PHP Internationalization Libraries are required to use the SpoofChecking validation)
swiftmailer/swiftmailer suggests installing ext-intl (Needed to support internationalized email addresses)
swiftmailer/swiftmailer suggests installing true/punycode (Needed to support internationalized email addresses, if ext-intl is not installed)
paragonie/random_compat suggests installing ext-libsodium (Provides a modern crypto API that can be used to generate random bytes.)
ramsey/uuid suggests installing ext-libsodium (Provides the PECL libsodium extension for use with the SodiumRandomGenerator)
ramsey/uuid suggests installing ext-uuid (Provides the PECL UUID extension for use with the PeclUuidTimeGenerator and PeclUuidRandomGenerator)
ramsey/uuid suggests installing ircmaxell/random-lib (Provides RandomLib for use with the RandomLibAdapter)
ramsey/uuid suggests installing moontoast/math (Provides support for converting UUID to 128-bit integer (in string form).)
ramsey/uuid suggests installing ramsey/uuid-console (A console application for generating UUIDs with ramsey/uuid)
ramsey/uuid suggests installing ramsey/uuid-doctrine (Allows the use of Ramsey\Uuid\Uuid as Doctrine field type.)
symfony/translation suggests installing symfony/config
symfony/translation suggests installing symfony/yaml
monolog/monolog suggests installing aws/aws-sdk-php (Allow sending log messages to AWS services like DynamoDB)
monolog/monolog suggests installing doctrine/couchdb (Allow sending log messages to a CouchDB server)
monolog/monolog suggests installing elasticsearch/elasticsearch (Allow sending log messages to an Elasticsearch server via official client)
monolog/monolog suggests installing ext-amqp (Allow sending log messages to an AMQP server (1.0+ required))
monolog/monolog suggests installing ext-mongodb (Allow sending log messages to a MongoDB server (via driver))
monolog/monolog suggests installing graylog2/gelf-php (Allow sending log messages to a GrayLog2 server)
monolog/monolog suggests installing mongodb/mongodb (Allow sending log messages to a MongoDB server (via library))
monolog/monolog suggests installing php-amqplib/php-amqplib (Allow sending log messages to an AMQP server using php-amqplib)
monolog/monolog suggests installing php-console/php-console (Allow sending log messages to Google Chrome)
monolog/monolog suggests installing rollbar/rollbar (Allow sending log messages to Rollbar)
monolog/monolog suggests installing ruflin/elastica (Allow sending log messages to an Elastic Search server)
laravel/framework suggests installing aws/aws-sdk-php (Required to use the SQS queue driver, DynamoDb failed job storage and SES mail driver (^3.0).)
laravel/framework suggests installing doctrine/dbal (Required to rename columns and drop SQLite columns (^2.6).)
laravel/framework suggests installing ext-memcached (Required to use the memcache cache driver.)
laravel/framework suggests installing ext-pcntl (Required to use all features of the queue worker.)
laravel/framework suggests installing ext-posix (Required to use all features of the queue worker.)
laravel/framework suggests installing ext-redis (Required to use the Redis cache and queue drivers.)
laravel/framework suggests installing league/flysystem-aws-s3-v3 (Required to use the Flysystem S3 driver (^1.0).)
laravel/framework suggests installing league/flysystem-cached-adapter (Required to use the Flysystem cache (^1.0).)
laravel/framework suggests installing league/flysystem-sftp (Required to use the Flysystem SFTP driver (^1.0).)
laravel/framework suggests installing moontoast/math (Required to use ordered UUIDs (^1.1).)
laravel/framework suggests installing pda/pheanstalk (Required to use the beanstalk queue driver (^4.0).)
laravel/framework suggests installing pusher/pusher-php-server (Required to use the Pusher broadcast driver (^4.0).)
laravel/framework suggests installing wildbit/swiftmailer-postmark (Required to use Postmark mail driver (^3.0).)
caffeinated/modules suggests installing wikimedia/composer-merge-plugin (Allows the ability to create and merge composer.json files for your individual modules for module-specific depe
ndency management.)
guzzlehttp/psr7 suggests installing zendframework/zend-httphandlerrunner (Emit PSR-7 responses)
intervention/image suggests installing ext-imagick (to use Imagick based image processing.)
intervention/image suggests installing intervention/imagecache (Caching extension for the Intervention Image library)
symfony/psr-http-message-bridge suggests installing nyholm/psr7 (For a super lightweight PSR-7/17 implementation)
phpseclib/phpseclib suggests installing ext-gmp (Install the GMP (GNU Multiple Precision) extension in order to speed up arbitrary precision integer arithmetic operations.)
phpseclib/phpseclib suggests installing ext-libsodium (SSH2/SFTP can make use of some algorithms provided by the libsodium-php extension.)
phpseclib/phpseclib suggests installing ext-mcrypt (Install the Mcrypt extension in order to speed up a few other cryptographic operations.)
psy/psysh suggests installing ext-pcntl (Enabling the PCNTL extension makes PsySH a lot happier :))
psy/psysh suggests installing ext-pdo-sqlite (The doc command requires SQLite to work.)
psy/psysh suggests installing ext-posix (If you have PCNTL, you'll want the POSIX extension as well.)
psy/psysh suggests installing hoa/console (A pure PHP readline implementation. You'll want this if your PHP install doesn't already support readline or libedit.)
php-http/message suggests installing slim/slim (Used with Slim Framework PSR-7 implementation)
php-http/discovery suggests installing puli/composer-plugin (Sets up Puli which is recommended for Discovery to work. Check http://docs.php-http.org/en/latest/discovery.html for more d
etails.)
moneyphp/money suggests installing ext-gmp (Calculate without integer limits)
moneyphp/money suggests installing ext-intl (Format Money objects with intl)
moneyphp/money suggests installing florianv/exchanger (Exchange rates library for PHP)
moneyphp/money suggests installing florianv/swap (Exchange rates library for PHP)
omnipay/common suggests installing league/omnipay (The default Omnipay package provides a default HTTP Adapter.)
phpoffice/phpspreadsheet suggests installing dompdf/dompdf (Option for rendering PDF with PDF Writer)
phpoffice/phpspreadsheet suggests installing jpgraph/jpgraph (Option for rendering charts, or including charts with PDF or HTML Writers)
phpoffice/phpspreadsheet suggests installing mpdf/mpdf (Option for rendering PDF with PDF Writer)
phpoffice/phpspreadsheet suggests installing tecnickcom/tcpdf (Option for rendering PDF with PDF Writer)
filp/whoops suggests installing whoops/soap (Formats errors as SOAP responses)
facade/ignition suggests installing laravel/telescope (^2.0)
sebastian/global-state suggests installing ext-uopz (*)
sebastian/environment suggests installing ext-posix (*)
phpunit/phpunit suggests installing ext-soap (*)
phpunit/phpunit suggests installing phpunit/php-invoker (^2.0.0)
Package endroid/qrcode is abandoned, you should avoid using it. Use endroid/qr-code instead.
Package zendframework/zend-diactoros is abandoned, you should avoid using it. Use laminas/laminas-diactoros instead.
Generating optimized autoload files
Deprecation Notice: Class App\Http\Controllers\Api\V1\ArticleController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\ArticleController.php
does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autol
oad/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Api\V1\BannerController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\BannerController.php do
es not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoloa
d/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Api\V1\CategoryController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\CategoryController.ph
p does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Aut
oload/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Api\V1\CommentController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\CommentController.php
does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autol
oad/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Api\V1\GoodsController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\GoodsController.php does
 not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/
ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Api\V1\IndexController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\IndexController.php does
 not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/
ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Api\V1\NavigationController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\NavigationControlle
r.php does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer
/Autoload/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Api\V1\OrderController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\OrderController.php does
 not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/
ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Api\V1\PageController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\PageController.php does n
ot comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/Cl
assMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Api\V1\UserController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Api\Http\Controllers\V1\UserController.php does n
ot comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/Cl
assMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Cashier\AlipayController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Cashier\Http\Controllers\AlipayController.php
does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autol
oad/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Cashier\ThirdPartypayController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Cashier\Http\Controllers\ThirdPartypayC
ontroller.php does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/
Composer/Autoload/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Cashier\VirtuaCurrencyController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Cashier\Http\Controllers\VirtuaCurrenc
yController.php does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/sr
c/Composer/Autoload/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Cashier\WechatController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Cashier\Http\Controllers\WechatController.php
does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autol
oad/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\MiniProgram\V1\IndexController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Miniprogram\Http\Controllers\V1\IndexCon
troller.php does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Co
mposer/Autoload/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Wechat\ArticleController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Wechat\Http\Controllers\ArticleController.php
does not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autol
oad/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Wechat\CartController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Wechat\Http\Controllers\CartController.php does n
ot comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/Cl
assMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Wechat\GoodsController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Wechat\Http\Controllers\GoodsController.php does
 not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/
ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Wechat\IndexController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Wechat\Http\Controllers\IndexController.php does
 not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/
ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Wechat\OrderController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Wechat\Http\Controllers\OrderController.php does
 not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/
ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Wechat\PageController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Wechat\Http\Controllers\PageController.php does n
ot comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/Cl
assMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Wechat\SearchController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Wechat\Http\Controllers\SearchController.php do
es not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoloa
d/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Wechat\ServerController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Wechat\Http\Controllers\ServerController.php do
es not comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoloa
d/ClassMapGenerator.php:201
Deprecation Notice: Class App\Http\Controllers\Wechat\UserController located in C:/Users/tlzs/github_cms/fullstack-backend/app\Modules\Wechat\Http\Controllers\UserController.php does n
ot comply with psr-4 autoloading standard. It will not autoload anymore in Composer v2.0. in phar://C:/Users/tlzs/AppData/Local/ComposerSetup/bin/composer.phar/src/Composer/Autoload/Cl
assMapGenerator.php:201
> Illuminate\Foundation\ComposerScripts::postAutoloadDump
> @php artisan package:discover --ansi
Discovered Package: caffeinated/modules
Discovered Package: facade/ignition
Discovered Package: fideloper/proxy
Discovered Package: intervention/image
Discovered Package: laravel/passport
Discovered Package: laravel/tinker
Discovered Package: maatwebsite/excel
Discovered Package: nesbot/carbon
Discovered Package: nunomaduro/collision
Discovered Package: spatie/laravel-permission
Package manifest generated successfully.



2 create database laravel_cms

3 php artisan migrate

4 php artisan db:seed

5 php artisan key:generate && php artisan passport:install && php artisan storage:link

5.1 
php artisan key:generate 
5.2
php artisan passport:install 
5.3 
php artisan storage:link
