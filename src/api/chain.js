import { Name, String, BlockIdOrNum, Boolean, Number } from '../schema';

export default {
  get_account: {
    params: {
      account_name: Name.required()
    }
  },
  get_code: {
    params: {
      account_name: Name
    }
  },
  get_currency_stats: {
    params: {
      code: Name,
      symbol: String
    }
  },
  get_currency_balance: {
    params: {
      code: Name,
      account: Name,
      symbol: String
    }
  },
  get_table_rows: {
    params: {
      code: Name.required(),
      scope: Name.required(),
      table: Name.required(),
      limit: {
        type: Number,
        default: 10
      },
      json: {
        type: Boolean,
        default: true
      }
    }
  },
  get_info: {

  },
  get_block: {
    params: {
      block_num_or_id: BlockIdOrNum
    }
  }
};
