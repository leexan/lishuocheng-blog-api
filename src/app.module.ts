import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import PrismaModule from './data/prisma.module';
import { SeedController } from './controllers/seed.controller';
import { TagService } from './services/tag.service';
import { CategoryService } from './services/catagory.service';
import { ArticleService } from './services/article.service';
@Module({
  imports: [PrismaModule],
  controllers: [SeedController],
  providers: [ArticleService, CategoryService, TagService],
})
export class AppModule {}
