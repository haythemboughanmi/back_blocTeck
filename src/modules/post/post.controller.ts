import { Body, Controller, Post , Request , Param, Get} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}


    @Post()
    createPost(@Request() req : any , @Body() newPost ){
        const user = req.user
        return this.postService.createPost(user,newPost)
    }

    @Get(':postId')
    getPostById(@Param('postId') postId : string){
    return this.postService.getPost(postId)
    }
}
