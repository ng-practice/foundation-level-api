import { ApiModelProperty } from '@nestjs/swagger';

export class Book {
  @ApiModelProperty({ required: true })
  isbn: string;

  @ApiModelProperty({ required: true })
  title: string;

  @ApiModelProperty({ required: false })
  subtitle: string;

  @ApiModelProperty({ required: false })
  rating: number;

  @ApiModelProperty({ required: false })
  description: string;

  @ApiModelProperty({ required: false })
  cover: string;

  @ApiModelProperty({ required: false })
  authors: string[];

  @ApiModelProperty({  required: false })
  isFavorite: boolean;
}
