import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    //operacao de criacao de feedbacks
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
