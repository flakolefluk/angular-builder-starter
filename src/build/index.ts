import {
  BuilderOutput,
  createBuilder,
  BuilderContext,
} from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { Schema } from './schema';

async function _build(
  options: JsonObject & Schema,
  context: BuilderContext,
): Promise<BuilderOutput> {
  if (options.log) {
    context.logger.info('Building...');
  }

  return { success: true };
}

export default createBuilder(_build);
